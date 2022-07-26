<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {

        $services_config = Cache::remember('config', now()->addHours(72), function() {
            return DB::table('config')->get();
        });

        $rec = DB::table('statistic')->where('page','dashboard');
        $rec->increment('visits');
        $rec->increment('auth_v');
        $services = Service::where('username', Auth::user()->username)->get()->first();

        $user = User::find(Auth::user()->id);
        $path = json_decode($user->json_config, true);

        if(!array_key_exists('services', $path)){
            $path += ['services' => ['cdn' => []]];

            $user->update([
                'json_config' => json_encode($path),
            ]);
        }

        if(!array_key_exists('urls', $path)){
            $path += ['urls' => []];

            $user->update([
                'json_config' => json_encode($path),
            ]);
        }

        if(!array_key_exists('config', $path)){
            $path += ['config' => ['urlsGrps' => []]];

            $user->update([
                'json_config' => json_encode($path),
            ]);
        }



        return inertia('Dashboard', [
            'services_config' => $services_config,
            'services'        => $services,
        ]);
    }


}
