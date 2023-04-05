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
        $user = User::find(Auth::user()->id);
        $path = json_decode($user->json_config, true);
        return Inertia::render('Advanced')->with([
            "advanced" => $path["advanced"],
        ]);
    }
}
