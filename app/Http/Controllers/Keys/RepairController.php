<?php

namespace App\Http\Controllers\Keys;

use App\Helpers\helperJSON\iniJson;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RepairController extends Controller
{
    //
    function __invoke(Request $request)
    {
        $sections = [
            $request->dashboard === "on" ? true : false,
            $request->skins     === "on" ? true : false,
            $request->advanced  === "on" ? true : false,
            $request->analitycs === "on" ? true : false
        ];

        $ini = new iniJson(Auth::user());
        $ini->ini(dashboard: $sections[0], skins: $sections[1], advanced: $sections[2], statistics: $sections[3]);

        return back();
    }
}
