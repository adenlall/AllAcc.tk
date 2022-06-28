<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class AsSeemController extends Controller
{
    //
    function __invoke($username)
    {


        $path = $username;

        if (User::where('username', $path)->exists()) {

            $query = ['username', 'name', 'age', 'gender', 'birthday', 'country', 'email', 'quote', 'track', 'artist'];

            User::where('username', $path)->get()->first()->increment('visit');
            $user = User::where('username', $path)->select($query)->get()->first();

            $services = Service::where('username', $path)->get()->first();
            $services_config = DB::table('config')->get();
            $deezURL = "https://api.deezer.com/search?q=artist:'{$user->artist}'track:'{$user->track}'";
            // $resop = Http::retry(2)->get($deezURL)->json();
            // dd($resop);
            if (User::where('username', $path)->select($query)->whereNotNull('artist')->exists()) {

                try {
                    $resop = Http::retry(2)->get($deezURL)->json();
                    // dd($resop);
                    if ($resop["total"] !== 0 || $resop["total"] !== null) {

                        return Inertia::render('AsSeem', [
                            "soung" => $resop["data"][0],
                            "user" => $user,
                            "services" => $services,
                            "services_config" => $services_config,
                        ]);
                    } else {

                        return Inertia::render('AsSeem', [
                            "soung" => null,
                            "user" => $user,
                            "services" => $services,
                            "services_config" => $services_config,
                        ]);
                    }
                } catch (Exception $ex) {
                    return Inertia::render('AsSeem', [
                        "soung" => null,
                        "user" => $user,
                        "services" => $services,
                        "services_config" => $services_config,
                    ]);
                }
            } else {
                // dd('no traxk');

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
