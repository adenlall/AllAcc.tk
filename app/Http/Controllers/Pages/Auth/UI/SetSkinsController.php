<?php

namespace App\Http\Controllers\Pages\Auth\UI;

use App\Http\Controllers\Controller;


use App\Helpers\Setup;
use App\Helpers\Validators\ConfigValues as ValidatorsConfigValues;
use App\Models\User;
use App\Rules\Skins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class SetSkinsController extends Controller
{
    function __invoke(Request $request)
    {
        $call = new Setup(Auth::user());


        if ($request->is === 'ui') {
            $call->setUI($request->data);
        } else {

            $validated = $request->validate([
                'skins'   => ["required", "max:50"],
                'icons'  => ["required", "max:50"],
                'font'   => ["required", "max:50"],
                'button' => ["required", "max:50"],
            ]);
            $arr = [
                'skins'=> $request->skins,
                'font'=>$request->font,
                'button'=> $request->button,
                'icons'=>$request->icons
            ];
            if ($validated && ValidatorsConfigValues::checkSkins($arr)) {
                $call->setTheme($arr);
            }
        }
        return back()->with([
            'type' => 'success',
            'message' => 'Your changes has been modified!'
        ]);
    }
}
