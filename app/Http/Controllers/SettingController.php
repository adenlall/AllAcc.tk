<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingController extends Controller
{
    function __invoke() {
        $combo = ['NeonPurple','RRG','BW'];
        $data = DB::table('skin')->select('icons','name','skin','img0','json_config','clr0','clr1','clr2','json_icons','json_headers')->get();
        $skin_arr = [];
        $icon_arr = [];
        // dd($skin_arr);
        for ($i=0; $i < count($data); $i++) {
            $temp = ["combo"=> array_merge(["data" => json_decode($data[$i]->json_config)], ["colors"=>[$data[$i]->clr0, $data[$i]->clr1,$data[$i]->clr2]],["json_headers"=>json_decode($data[$i]->json_headers)])];
            $temp = array_merge($temp ,["name" => $data[$i]->name]);
            array_push($skin_arr,$temp);

            $tempo = json_decode($data[$i]->json_icons);
            array_push($icon_arr, array_merge(["combo" => [$tempo[0],$tempo[1],$tempo[2],$tempo[3]]], ["icons"=>$data[$i]->icons]));
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
