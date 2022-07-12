<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SetStatisticsController extends Controller
{

    function __invoke(Request $request)
    {
        $user = User::find(Auth::user()->id);
        $path = json_decode($user->json_config, true);
        $ser  = $request->service;
        $pth  = $request->url;
        $oarr = array("statistics"=>["services"=>['pure'=>false]]);
        if (array_key_exists('statistics',$path)) {
            if (!array_key_exists($ser,$path['statistics']['services'])) {
                $path['statistics']['services'] += [$ser => 1];
            } else {
                $path['statistics']['services'][$ser] = $path['statistics']['services'][$ser]+1;
            }
        } else {
            $merged_arr = ["statistics" =>["services"=>array_merge($oarr['statistics']['services'], [$ser => 1])]];
            $path += $merged_arr;
        }
        $user->update([
            "json_config"=>$path
        ]);
        return Inertia::location($pth);
    }
}
