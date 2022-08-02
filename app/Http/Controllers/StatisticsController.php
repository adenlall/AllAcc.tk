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

    function __invoke(Request $request)
    {

        $user = Cache::remember(Auth::user()->username, now()->addMinute(), function () {
            return User::find(Auth::user()->id);
        });
        $arr = json_decode($user->json_config, true);
        $locate = json_decode($user->json_locate, true);
        $data = Cache::remember(Auth::user()->id.'stats', now()->addHours(16), function () use($locate) {
            $data = ['timeline'=>[],'countries'=>[],'stats'=>['os' => [], 'device' => [], 'browser' => []]];
            $cnt_ = [];
            $conf = ['os', 'device', 'browser'];
            for ($i = 0; $i < count($locate['logs']); $i++) {
                if (count($locate['logs']) > 7 && $i > count($locate['logs']) - 7) {
                    array_push($data['timeline'], ["visits" => $locate['logs'][$i]['visits'], "on" => $locate['logs'][$i]['day']]);
                }
                if (count($locate['logs']) <= 7) {
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
        if (!array_key_exists('statistics', $arr)) {
            $arr += ['statistics' => ['services' => []]];
        }
        $services_c = Cache::remember('config', now()->addHours(48), function () {
            return DB::table('config')->get();
        });
        $services = Cache::remember("{Auth::user()->username}_s", now()->addMinute(), function () {
            return Service::where('username', Auth::user()->username)->get()->first();
        });

        $rec = DB::table('statistic')->where('page', 'statistics');
        $rec->increment('visits');
        $rec->increment('auth_v');

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
