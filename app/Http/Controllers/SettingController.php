<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class SettingController extends Controller
{
    function __invoke() {

        $data = Cache::remember('skin', now()->addHours(72), function() {
             return DB::table('skin')->get();
        });
        $skin_arr = [];
        $icon_arr = [];

        for ($i=0; $i < count($data); $i++) {
            $temp = ["combo"=> array_merge(["data" => json_decode($data[$i]->json_config)], ["colors"=>[$data[$i]->clr0, $data[$i]->clr1,$data[$i]->clr2]],["header"=>$data[$i]->header])];
            $temp = array_merge($temp ,["name" => $data[$i]->name],["c_name" => $data[$i]->c_name]);
            array_push($skin_arr,$temp);

            array_push($icon_arr, array_merge(["c_icons"=>$data[$i]->c_icons], ["icons"=>$data[$i]->icons]));
        }

        $rec = DB::table('statistic')->where('page','skinSetting');
        $rec->increment('visits');
        $rec->increment('auth_v');
        // dd($skin_arr, $icon_arr);
        return inertia('Setting')->with([
            "skins" => $skin_arr,
            "icons" => $icon_arr,
        ]);
    }
}
