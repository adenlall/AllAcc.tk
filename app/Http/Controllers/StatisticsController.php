<?php

namespace App\Http\Controllers;

use App\Helpers\DBhelper;
use App\Models\Service;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{

    function __invoke()
    {

        $user = Cache::remember(Auth::user()->username, now()->addMinute(), function () {
            return User::find(Auth::user()->id);
        });
        $arr = json_decode($user->json_config, true);
        $locate = json_decode($user->json_locate, true);
        // $locate['logs']=[
        //     ["day"=>'2022-07-19',"visits"=>'7443'],
        //     ["day"=>'2022-08-10',"visits"=>'7443'],
        //     ["day"=>'2022-08-11',"visits"=>'7443'],
        //     ["day"=>'2022-08-12',"visits"=>'7443'],
        //     ["day"=>'2022-08-14',"visits"=>'7443'],
        //     ["day"=>'2022-08-15',"visits"=>'7443'],
        //     ["day"=>'2022-08-18',"visits"=>'7443'],
        //     ["day"=>'2022-08-19',"visits"=>'7443'],
        // ];
        // dd($locate);
        // $data = Cache::remember(Auth::user()->id.'stats', now()->hours(10), function () use($locate) {
        $data = Cache::remember('_'.Auth::user()->username.'_stats_', now()->addMinutes(2), function () use($locate) {
            $data = ['timeline'=>[],'countries'=>[],'stats'=>['os' => [], 'device' => [], 'browser' => []]];
            $cnt_ = [];
            $conf = ['os', 'device', 'browser'];
            for ($i = 0; $i < count($locate['logs']); $i++) {
                if (Carbon::createFromFormat('Y-m-d', now()->subDays(7)->format('Y-m-d'))->lte(Carbon::createFromFormat('Y-m-d', $locate['logs'][$i]['day']))) {
                    array_push($data['timeline'], ["visits" => $locate['logs'][$i]['visits'], "on" => $locate['logs'][$i]['day']]);
                }
                for ($x = 0; $x < count($locate['logs'][$i]['srcs']); $x++) {
                    $a = $locate['logs'][$i]['srcs'][$x]['country'];
                    $b = $locate['logs'][$i]['srcs'][$x]['count'];
                    if (in_array($a, $cnt_)) {
                        for ($y = 0; $y < count($data['countries']); $y++) {
                            if ($data['countries'][$y]['is'] == $a) {
                                $data['countries'][$y]['count'] = $data['countries'][$y]['count'] + $b;
                                break;
                            }
                        }
                    } else {
                        $cnt_[] = $a;
                        array_push($data['countries'], ['is' => $a, 'count' => $b]);
                    }
                }

                for ($z = 0; $z < count($conf); $z++) {
                    $type = $conf[$z];
                    $nnow = $locate['logs'][$i]['agents'][$type];
                    for ($p = 0; $p < count($nnow); $p++) {
                        $ff = true;
                        for($v=0; $v<count($data['stats'][$type]); $v++){
                            if($data['stats'][$type][$v]['name']===$nnow[$p]['name']){
                                $ff = false;
                                $data['stats'][$type][$v]['count']=$nnow[$p]['count']+$data['stats'][$type][$v]['count'];
                                break;
                            }
                        }
                        if($ff){
                            array_push($data['stats'][$type], ['name'=>$nnow[$p]['name'],'count'=>$nnow[$p]['count']]);
                        }

                    }
                }
            }
            return $data;
        });

        $services_c = Cache::remember('config', now()->addHours(48), function () {
            return DB::table('config')->get();
        });
        $services = Cache::remember("{Auth::user()->username}_s", now()->addMinute(), function () {
            return Service::where('username', Auth::user()->username)->get()->first();
        });

        DBhelper::tableInc("statistics");
        return Inertia('Statistics')->with([
            "services_statistics" => $arr['statistics'],
            "services" => $services,
            "visits" => $user->visit,
            "config" => $services_c,
            "geo" => $data['countries'],
            "timeline" => $data['timeline'],
            "stats" => $data['stats']
        ]);
    }
}
