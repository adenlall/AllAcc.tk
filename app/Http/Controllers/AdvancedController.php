<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class AdvancedController extends Controller
{
    //
    function __invoke()
    {

        $user = Cache::remember(Auth::user()->username, now()->addMinute(), function() {
            return User::find(Auth::user()->id);
        });

        $path = json_decode($user->json_config, true);

        if(!array_key_exists("advanced", $path)){
            $path += ["advanced"=>["from"=>[]]];
            $user->update([
                'json_config' => json_encode($path),
            ]);
        };

        return Inertia::render('Advanced')->with([
            "advanced" => $path["advanced"],
        ]);
    }
}
