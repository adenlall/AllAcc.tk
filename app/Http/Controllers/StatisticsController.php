<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    //
    function __invoke(Request $request)
    {

        $user = User::find(Auth::user()->id);
        $arr = json_decode($user->json_config, true);

        if (!array_key_exists('statistics',$arr)) {
            $arr += ['statistics'=>['services'=>[]]];
        }
        $services_c = DB::table('config')->select('name','mColor','sColor')->get();
        $services = Service::find(Auth::user()->username);
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
