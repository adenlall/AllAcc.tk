<?php

namespace App\Helpers;

use Illuminate\Support\Facades\File;
use Jenssegers\Agent\Facades\Agent;

class Client
{

    public function set($a = null)
    {
        $ags = Agent::languages();

        if ($a === null or $a === false) {
            // dd("here");
            for ($i = 0; $i < count($ags); $i++) {
                if (File::exists(resource_path("lang/" . $ags[$i] . "/" . "index" . ".json"))) {
                    cookie()->queue(cookie("lang", $ags[$i], "99999"));
                    return true;
                }
            }
            cookie()->queue(cookie("lang", 'en', "99999"));
            return false;
        } else {
            if (File::exists(resource_path("lang/" . $a . "/" . "index" . ".json"))) {
                // dd("nnn");
                cookie()->queue(cookie("lang", $a, "99999"));
                return true;
            } else {
                // dd("yyy");
                cookie()->queue(cookie("lang", 'en', "99999"));
                return false;
            }
        }
    }

    public function get()
    {
        return cookie('lang');
    }

    public function has()
    {
        $a =  cookie('lang');
        if($a){
            return true;
        }else{
            return false;
        }
    }



}
