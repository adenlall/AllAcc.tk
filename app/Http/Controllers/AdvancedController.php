<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdvancedController extends Controller
{
    //
    function __invoke()
    {
        $user = User::find(Auth::user()->id);
        $path = json_decode($user->json_config, true);

        if(!array_key_exists("advanced", $path)){
            $path += ["advanced"=>["from"=>[]]];
            $user->update([
                'json_config' => json_encode($path),
            ]);
        };

        // testing
        // $path["advanced"]["from"] = [];
        // $user->update([
        //     'json_config' => json_encode($path),
        // ]);

        // dd($path);
        return Inertia::render('Advanced')->with([
            "advanced" => $path["advanced"],
        ]);
    }
}
