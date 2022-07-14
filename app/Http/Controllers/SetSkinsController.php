<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Rules\Skins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class SetSkinsController extends Controller
{
    function __invoke(Request $request)
    {
        $validated = $request->validate([
            'skin'  => ["required", new Skins],
            'icons' => ["required", new Skins],
        ]);
        if($validated){
            $user = User::find(Auth::user()->id);
            $path = json_decode($user->json_config, true);
            $path['theme'] = ['skin'=>$request->skin, 'icons'=>$request->icons, 'besthex'=>$request->hex, 'pure'=>false];
            $user->update([
                'json_config' => json_encode($path),
            ]);
            $user->save();
        }
        return back()->with([
            'type' => 'success',
            'message' => 'Your changes has been modified!'
        ]);
    }
}
