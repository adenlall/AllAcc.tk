<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request as FacadesRequest;
use Stevebauman\Location\Facades\Location;
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
use Zarei\UserAgentParser\Facades\UserAgentParser;

class AsSeemController extends Controller
{
    //
    function __invoke(Request $request, $username)
    {

        $path = $username;

        if (User::where('username', $path)->exists()) {

            $sp_user = User::where('username', $path)->select(['visit'])->cursor()->first();
            // $locate = json_decode($sp_user->json_locate, true);
            // $ip = FacadesRequest::ip();
            // $coun = (Location::get($ip) !== false) ? Location::get($ip)->countryName : 'locate';


            
            // $parsed = UserAgentParser::parse(request()->userAgent());
            // $os = $parsed->os();
            // $device = $parsed->device();
            // $browser = $parsed->browser();

            // if (count($locate['logs']) === 0) {
            //     array_push($locate['logs'], ['agents' => ['os' => [['name' => $os->name, 'count' => 1]], 'device' => [['name' => $device->type, 'count' => 1]],  'browser' => [['name' => $browser->name, 'count' => 1]]], 'day' => Carbon::now()->format('Y-m-d'), 'visits' => 1, 'srcs' => [['ips' => [$ip], 'country' => $coun, 'count' => 1]]]);
            // } else {
            //     if ($locate['logs'][count($locate['logs']) - 1]['day'] !== Carbon::now()->format('Y-m-d')) {
            //         array_push($locate['logs'], ['day' => Carbon::now()->format('Y-m-d'), 'visits' => 1, 'agents' => ['os' => [['name' => $os->name, 'count' => 1]], 'device' => [['name' => $device->type, 'count' => 1]],  'browser' => [['name' => $browser->name, 'count' => 1]]], 'srcs' => [['ips' => [$ip], 'country' => $coun, 'count' => 1]]]);
            //         dd('else if');
            //     } else {
            //         $locate['logs'][count($locate['logs']) - 1]['visits'] = $locate['logs'][count($locate['logs']) - 1]['visits'] + 1;
            //         $index = true;
            //         for ($i = 0; $i < count($locate['logs'][count($locate['logs']) - 1]['srcs']); $i++) { //
            //             if ($locate['logs'][count($locate['logs']) - 1]['srcs'][$i]['country'] === $coun) {
            //                 $locate['logs'][count($locate['logs']) - 1]['srcs'][$i]['count'] = $locate['logs'][count($locate['logs']) - 1]['srcs'][$i]['count'] + 1;
            //                 if (!in_array($ip, $locate['logs'][count($locate['logs']) - 1]['srcs'][$i]['ips'])) {
            //                     $locate['logs'][count($locate['logs']) - 1]['srcs'][$i]['ips'][] = $ip;
            //                 }
            //                 $index = false;
            //                 break;
            //             }
            //         }
            //         if ($index) {
            //             array_push($locate['logs'][count($locate['logs']) - 1]['srcs'], ['ips' => [$ip], 'country' => $coun, 'count' => 1]);
            //         }
            //         $to_for = ['os', 'device', 'browser'];
            //         for ($i = 0; $i < count($to_for); $i++) { //
            //             for ($in = 0; $in < count($locate['logs'][count($locate['logs']) - 1]['agents'][$to_for[$i]]); $in++) { //
            //                 $is = true;
            //                 if ($locate['logs'][count($locate['logs']) - 1]['agents'][$to_for[$i]][$in]['name'] ===  ($to_for[$i] !== 'device' ? ${$to_for[$i]}->name : ${$to_for[$i]}->type)) {
            //                     $locate['logs'][count($locate['logs']) - 1]['agents'][$to_for[$i]][$in]['count'] = $locate['logs'][count($locate['logs']) - 1]['agents'][$to_for[$i]][$in]['count'] + 1;
            //                     $is = false;
            //                     break;
            //                 }
            //             }
            //             if ($is) array_push($locate['logs'][count($locate['logs']) - 1]['agents'][$to_for[$i]], ['name' => $to_for[$i] !== 'device' ? ${$to_for[$i]}->name : ${$to_for[$i]}->type, 'count' => 1]);
            //         }
            //     }
            // }
            $sp_user->update([
                'visit'       => $sp_user->visit+1,
                // 'json_locate' => json_encode($locate),
            ]);



            $user = Cache::remember($path . 'asseem', now()->addMinutes(3), function () use ($path) {
                return User::where('username', $path)->select(['id', 'name','artist', 'track', 'username', 'email', 'age', 'gender', 'birthday', 'country', 'quote', 'json_config'])->cursor()->first();
            });

            $rec = DB::table('statistic')->where('page', 'AsSeem');
            $rec->increment('visits');
            if (Auth::check()) {
                $rec->increment('auth_v');
            } else {
                $rec->increment('guest_v');
            }


            $services = Cache::remember($path."_s", now()->addMinutes(4), function () use ($path) {
                return Service::where('username', $path)->cursor()->first();
            });

            $services_config = Cache::remember('config', now()->addHours(72), function () {
                return DB::table('config')->get();
            });




            if ($request->from !== null) {
                $advance = json_decode($user->json_config, true);
                if (array_key_exists("advanced", $advance)) {
                    for ($i = 0; $i < count($advance["advanced"]["from"]); $i++) {
                        if ($advance["advanced"]["from"][$i]["is"] === $request->from) {
                            $advance["advanced"]["from"][$i]["clicks"] = $advance["advanced"]["from"][$i]["clicks"] + 1;
                            $user->update([
                                'json_config' => json_encode($advance)
                            ]);
                            break;
                        }
                    }
                }
            }




            if ($user->artist !== null) {
                $deezURL = "https://api.deezer.com/search?q=artist:'{$user->artist}'track:'{$user->track}'";
                try {
                    $resop = Cache::remember($user->username."_soung", now()->addMinutes(2), function () use ($deezURL) {
                        return Http::retry(2)->get($deezURL)->json();
                    });
                    return Inertia::render('AsSeem', [
                        "soung" => $resop["data"][0],
                        "user" => $user,
                        "services" => $services,
                        "services_config" => $services_config,
                    ]);
                } catch (Exception $ex) {
                    return Inertia::render('AsSeem', [
                        "soung" => null,
                        "user" => $user,
                        "services" => $services,
                        "services_config" => $services_config,
                    ]);
                }
            } else {
                return Inertia::render('AsSeem', [
                    "soung" => null,
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
