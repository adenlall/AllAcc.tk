<?php


namespace App\Http\Controllers\Pages\Guest;

use App\Http\Controllers\Controller;

use App\Helpers\DBhelper;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use App\Models\Service;
use Inertia\Inertia;
use App\Models\User;
use Exception;
use Jenssegers\Agent\Agent;
use Victorybiz\GeoIPLocation\GeoIPLocation;
use Zarei\UserAgentParser\Facades\UserAgentParser;
use Stevebauman\Location\Facades\Location;


class AsSeemController extends Controller
{
    //
    function __invoke(Request $request, $username)
    {

        $path = $username;

        if (User::where('username', $path)->exists()) {



            // log data for analytics
            $ip = request()->ip();
            $geoip = new GeoIPLocation();
            $sp_user = User::where('username', $path)->get()->first();

            if ($geoip->getCountry() !== false) {

                // things to log
                $to_for = ['os', 'device', 'browser', 'lang'];

                $locate = json_decode($sp_user->json_locate, true);

                $agent = new Agent();
                $cntr = $geoip->getCountry();

                $os =  $agent->platform();
                $device = $agent->device();
                $browser = $agent->browser();
                $lang = $agent->languages();
                if(gettype($lang) === 'array'){
                    foreach ($lang as $ln) {
                        if(strlen($ln) === 2){
                            $lang = $ln;
                            break;
                        }
                    }
                }
                if(gettype($lang) === 'array'){
                    $lang = $lang[0];
                }


                if (count($locate['logs']) === 0) {
                    array_push($locate['logs'], ['agents' => ['os' => [['name' => $os, 'count' => 1]], 'device' => [['name' => $device, 'count' => 1]], 'lang' => [['name' => $lang, 'count' => 1]],  'browser' => [['name' => $browser, 'count' => 1]]], 'day' => Carbon::now()->format('Y-m-d'), 'visits' => 1, 'srcs' => [['ips' => [$ip], 'country' => $cntr, 'count' => 1]]]);
                } else {
                    if ($locate['logs'][count($locate['logs']) - 1]['day'] !== Carbon::now()->format('Y-m-d')) {
                        array_push($locate['logs'], ['day' => Carbon::now()->format('Y-m-d'), 'visits' => 1, 'agents' => ['os' => [['name' => $os, 'count' => 1]], 'device' => [['name' => $device, 'count' => 1]], 'lang' => [['name' => $lang, 'count' => 1]],  'browser' => [['name' => $browser, 'count' => 1]]], 'srcs' => [['ips' => [$ip], 'country' => $cntr, 'count' => 1]]]);
                        // dd('else if');
                    } else {
                        $locate['logs'][count($locate['logs']) - 1]['visits'] = $locate['logs'][count($locate['logs']) - 1]['visits'] + 1;
                        $index = true;
                        for ($i = 0; $i < count($locate['logs'][count($locate['logs']) - 1]['srcs']); $i++) { //
                            if ($locate['logs'][count($locate['logs']) - 1]['srcs'][$i]['country'] === $cntr) {
                                $locate['logs'][count($locate['logs']) - 1]['srcs'][$i]['count'] = $locate['logs'][count($locate['logs']) - 1]['srcs'][$i]['count'] + 1;
                                if (!in_array($ip, $locate['logs'][count($locate['logs']) - 1]['srcs'][$i]['ips'])) {
                                    $locate['logs'][count($locate['logs']) - 1]['srcs'][$i]['ips'][] = $ip;
                                }
                                $index = false;
                                break;
                            }
                        }
                        if ($index) {
                            array_push($locate['logs'][count($locate['logs']) - 1]['srcs'], ['ips' => [$ip], 'country' => $cntr, 'count' => 1]);
                        }
                        for ($i = 0; $i < count($to_for); $i++) { //
                            for ($in = 0; $in < count($locate['logs'][count($locate['logs']) - 1]['agents'][$to_for[$i]]); $in++) { //
                                $is = true;
                                if ($locate['logs'][count($locate['logs']) - 1]['agents'][$to_for[$i]][$in]['name'] ===  ${$to_for[$i]}) {
                                    $locate['logs'][count($locate['logs']) - 1]['agents'][$to_for[$i]][$in]['count'] = $locate['logs'][count($locate['logs']) - 1]['agents'][$to_for[$i]][$in]['count'] + 1;
                                    $is = false;
                                    break;
                                }
                            }
                            if ($is) array_push($locate['logs'][count($locate['logs']) - 1]['agents'][$to_for[$i]], ['name' => ${$to_for[$i]}, 'count' => 1]);
                        }
                    }
                }
                $sp_user->update([
                    'visit'       => $sp_user->visit + 1,
                    'json_locate' => json_encode($locate),
                ]);
            }




            //  increment AsSeem visits
            DBhelper::tableInc("AsSeem");

            //increment user public page visits
            $conf = json_decode($sp_user->json_config, true);
            if ($request->from !== null) {
                    for ($i = 0; $i < count($conf["advanced"]["from"]); $i++) {
                        if ($conf["advanced"]["from"][$i]["is"] === $request->from) {
                            $conf["advanced"]["from"][$i]["clicks"] += 1;
                            break;
                        }
                        $user->update([
                            'json_config' => json_encode($conf)
                        ]);

                }
            }


            // data
            $services = Cache::remember($path . "_services_", now()->addMinutes(4), function () use ($path) {
                return Service::where('username', $path)->cursor()->first();
            });
            $services_config = Cache::remember('config', now()->addHours(72), function () {
                return DB::table('config')->get();
            });
            $user = Cache::remember($path . 'asseem', now()->addMinutes(3), function () use ($path) {
                return User::where('username', $path)->select(['id', 'name', 'artist', 'track', 'username', 'email', 'age', 'gender', 'birthday', 'country', 'quote', 'json_config'])->cursor()->first();
            });


            // return
            if ($conf['ui']['type'] === 'Blade') {
                return view('app', [
                    "cosui" => $conf['ui'][$conf['ui']['active']],
                    "user" => $user,
                    "services" => $services,
                    "services_config" => $services_config,
                ]);
            } else {    // JSX

                $sng = null;
                if ($user->artist !== null) {
                    $deezURL = "https://api.deezer.com/search?q=artist:'{$user->artist}'track:'{$user->track}'";
                    try {
                        $resop = Cache::remember($path . "_soung", now()->addMinutes(2), function () use ($deezURL) {
                            return Http::retry(2)->get($deezURL)->json();
                        });
                            $sng = $resop["data"][0];
                    } catch (Exception $ex) {}
                }
                return Inertia::render('AsSeem',[
                    "soung" => $sng,
                    "user" => $user,
                    "services" => $services,
                    "services_config" => $services_config,
                ]);
            }
        } else {
            return abort(404);
        }
    }
}
