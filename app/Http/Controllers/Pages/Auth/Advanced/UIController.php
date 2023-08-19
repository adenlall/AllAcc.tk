<?php

namespace App\Http\Controllers\Pages\Auth\Advanced;

use App\Http\Controllers\Controller;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UIController extends Controller
{
    //
    function __invoke(Request $request)
    {
        $user = User::find(Auth::user()->id);
        $path = json_decode($user->json_config, true);
        $skins = DB::table('skins')->select('name')->get();

        return Inertia('interface/UI')->with([
            "cosUI1"=> $path['UI']['custom1'],
            "cosUI2"=> $path['UI']['custom2'],
            "ediUI1"=> $path['UI']['custom2'],
            "ediUI2"=> $path['UI']['custom2'],
            "skins" => $skins,
            "active"=> $path['UI']['active']
        ]);
    }
}
