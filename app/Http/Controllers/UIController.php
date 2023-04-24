<?php

namespace App\Http\Controllers;

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
        $skins = DB::table('skin')->select('name')->get();

        return Inertia('interface/UI')->with([
            "cosUI1"=> $path['UI']['costume0'],
            "cosUI2"=> $path['UI']['costume1'],
            "skins" => $skins,
            "active"=> $path['UI']['active']
        ]);
    }
}
