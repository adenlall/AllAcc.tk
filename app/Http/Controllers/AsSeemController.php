<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class AsSeemController extends Controller
{
    //
    function __invoke(Request $request, $username)
    {

        $path = $username;

        if (User::where('username', $path)->exists()) {

            $query = ['id', 'username', 'name', 'age', 'gender', 'birthday', 'json_config', 'country', 'email', 'quote', 'track', 'artist'];

            User::where('username', $path)->get()->first()->increment('visit');
            $user = User::where('username', $path)->select($query)->get()->first();

            $rec = DB::table('statistic')->where('page', 'AsSeem');
            $rec->increment('visits');
            if (Auth::check()) {
                $rec->increment('auth_v');
            } else {
                $rec->increment('guest_v');
            }

            $services = Service::where('username', $path)->get()->first();
            $services_config = DB::table('config')->get();
            $deezURL = "https://api.deezer.com/search?q=artist:'{$user->artist}'track:'{$user->track}'";
            // $resop = Http::retry(2)->get($deezURL)->json();
            // dd($resop);

            $skin  = json_decode($user->json_config)->theme->skin;
            $icons = json_decode($user->json_config)->theme->icons;
            $skin_given =  DB::table('skin')->where('name', $skin)->select(['name', 'img0', 'img1', 'img2', 'clr0', 'clr1', '__img', 'json_config', 'json_headers'])->get()->first();
            $icons_given = DB::table('skin')->where('icons', $icons)->select(['icons', 'json_icons'])->get()->first();

            if ($request->from !== null) {
                $advance = json_decode($user->json_config, true);
                if (array_key_exists("advanced", $advance)) {
                    for ($i = 0; $i < count($advance["advanced"]["from"]); $i++) {
                        if ($advance["advanced"]["from"][$i]["is"] === $request->from) {
                            $advance["advanced"]["from"][$i]["clicks"] = $advance["advanced"]["from"][$i]["clicks"] + 1;
                            $user->update([
                                'json_config'=>json_encode($advance)
                            ]);
                            break;
                        }
                    }
                }
            }




            if (User::where('username', $path)->select($query)->whereNotNull('artist')->exists()) {

                try {
                    $resop = Http::retry(2)->get($deezURL)->json();
                    // dd($resop);

                    return Inertia::render('AsSeem', [
                        "soung" => $resop["data"][0],
                        "user" => $user,
                        "services" => $services,
                        "icons" => $icons_given,
                        "skin" => $skin_given,

                        "services_config" => $services_config,
                    ]);
                } catch (Exception $ex) {
                    return Inertia::render('AsSeem', [
                        "soung" => null,
                        "user" => $user,
                        "services" => $services,
                        "icons" => $icons_given,
                        "skin" => $skin_given,
                        "services_config" => $services_config,
                    ]);
                }
            } else {

                return Inertia::render('AsSeem', [
                    "soung" => null,
                    "user" => $user,
                    "services" => $services,

                    "icons" => $icons_given,
                    "skin" => $skin_given,
                    "services_config" => $services_config,
                ]);
            }
        } else {
            return abort(404);
        }
    }
}
