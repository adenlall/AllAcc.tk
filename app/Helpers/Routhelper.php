<?php

namespace App\Helpers;

use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Routhelper
{

    static public function IsGuest(HttpRequest $request){
        try {
            $route = $request->route();
        } catch (\Throwable $th) {
            return false;
        }

        for ($i=0; $i < count($route->action["middleware"]); $i++) {

                $true = $route->middleware()[$i];

                if ($true == 'auth') {
                    # code...
                    return false;
                }
        }
        return true;
    }

}
