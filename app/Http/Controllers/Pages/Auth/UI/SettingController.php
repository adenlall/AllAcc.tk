<?php

namespace App\Http\Controllers\Pages\Auth\UI;

use App\Http\Controllers\Controller;


use App\Helpers\Getters\Theme;
use App\Helpers\DBhelper;

class SettingController extends Controller
{
    function __invoke() {

        DBhelper::tableInc("skinSetting");
        
        return inertia('Setting')->with([
            "skins"   => Theme::skins(),
            "icons"   => Theme::icons(),
            "fonts"   => Theme::fonts(),
            "buttons" => Theme::buttons()
        ]);
    }
}
