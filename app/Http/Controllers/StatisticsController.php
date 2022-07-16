<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    //
    function __invoke(Request $request)
    {

        $user = Cache::remember(Auth::user()->username, now()->addMinute(), function() {
            return User::find(Auth::user()->id);
        });
        $arr = json_decode($user->json_config, true);

        if (!array_key_exists('statistics',$arr)) {
            $arr += ['statistics'=>['services'=>[]]];
        }
        $services_c = Cache::remember('config', now()->addHours(48), function() {
            return DB::table('config')->get();
        });
        $services = Cache::remember("{Auth::user()->username}_s", now()->addMinute(), function() {
            return Service::where('username', Auth::user()->username)->get()->first();
        });


        $rec = DB::table('statistic')->where('page','statistics');
        $rec->increment('visits');
        $rec->increment('auth_v');

        // dd($arr);
        return Inertia('Statistics')->with([
            "services_statistics" => $arr['statistics'],
            "services" => $services,
            "visits" => $user->visit,
            "config" => $services_c,
        ]);
    }
}
