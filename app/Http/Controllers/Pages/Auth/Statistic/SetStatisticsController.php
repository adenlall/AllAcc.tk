<?php

namespace App\Http\Controllers\Pages\Auth\Statistic;

use App\Http\Controllers\Controller;


use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SetStatisticsController extends Controller
{

    function __invoke(Request $request)
    {
        $user = User::where('username',$request->for_user)->get()->first();
        $path = json_decode($user->json_config, true);
        $ser  = $request->service;
        $pth  = $request->url;
        // dd($path);
        if (array_key_exists('statistics',$path)) {
            if (!array_key_exists($ser,$path['statistics']['services'])) {
                $path['statistics']['services'] += [$ser => 1];
            } else {
                $path['statistics']['services'][$ser] = $path['statistics']['services'][$ser]+1;
            }
        } else {
            $merged_arr = ["statistics" =>["services"=>[$ser => 1]]];
            $path += $merged_arr;
        }
        $user->update([
            "json_config"=>$path
        ]);
        // dd($path);
        return Inertia::location($pth);
    }
}
