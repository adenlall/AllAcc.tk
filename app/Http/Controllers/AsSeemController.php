<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
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


            User::where('username', $path)->get()->first()->increment('visit');

            $user = Cache::remember($path, now()->addMinutes(2), function() use ($path) {
                return User::where('username', $path)->get()->first();
            });

            $rec = DB::table('statistic')->where('page', 'AsSeem');
            $rec->increment('visits');
            if (Auth::check()) {
                $rec->increment('auth_v');
            } else {
                $rec->increment('guest_v');
            }


            $services = Cache::remember("{Auth::user()->username}_s", now()->addMinutes(2), function() use ($path) {
                return Service::where('username', $path)->get()->first();
            });

            $services_config = Cache::remember('config', now()->addHours(48), function () {
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
                    $resop = Cache::remember("{$user->username}_soung", now()->addMinutes(2), function() use ($deezURL){
                        return Http::retry(2)->get($deezURL)->json();
                    });
                    // dd($resop);

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
