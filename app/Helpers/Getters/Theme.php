<?php

namespace app\Helpers\Getters;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class Theme
{
    
    static public function skins() : array
    {
        $data = Cache::remember('skins', now()->addHours(300), function() {
            $skin_arr = [];
            $data = DB::table('skins')->get();
            for ($i=0; $i < count($data); $i++) {
                $temp = ["combo"=> array_merge(["data" => json_decode($data[$i]->json_config)], ["colors"=>[$data[$i]->clr0, $data[$i]->clr1,$data[$i]->clr2]],["header"=>$data[$i]->header])];
                $temp = array_merge($temp ,["name" => $data[$i]->name],["c_name" => $data[$i]->c_name]);
                array_push($skin_arr,$temp);
            }
            return $skin_arr;
        });

       return $data;

    }

    static public function icons() : array
    {
        $data = Cache::remember('icons', now()->addHours(300), function() {
            $icon_arr = [];
            $data = DB::table('skins')->get();
            for ($i=0; $i < count($data); $i++) {
                $temp = ["combo"=> array_merge(["data" => json_decode($data[$i]->json_config)], ["colors"=>[$data[$i]->clr0, $data[$i]->clr1,$data[$i]->clr2]],["header"=>$data[$i]->header])];
                $temp = array_merge($temp ,["name" => $data[$i]->name],["c_name" => $data[$i]->c_name]);
                array_push($icon_arr, array_merge(["name"=>$data[$i]->c_icons], ["c_name"=>$data[$i]->icons]));
            }
            return $icon_arr;
        });

       return $data; 

    }


    static public function fonts() : array
    {
        $data = Cache::remember('fonts', now()->addHours(300), function(){
            $files = File::files(public_path("fonts"));
            $fonts = [];
            for ($i=0; $i < count($files); $i++) { 
                $fonts[] = pathinfo($files[$i], PATHINFO_FILENAME);
            }
            return $fonts;
        });
        return $data;
    }


    static public function buttons() : array
    {
        return ['orangebtn', 'oldbtn', 'roundedborderbtn', 'rgbbtn', 'purplebtn', 'blurbtn'];
    }




}
