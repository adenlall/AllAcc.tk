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
        $user = User::find(Auth::user()->id);
        $path = json_decode($user->json_config, true);

        if ($request->is === 'cosui') {
            $path['UI']['costume0'] = $request->ui;
            $user->update([
                'json_config' => json_encode($path),
            ]);
        }
        if ($request->is === 'type') {
            if (!array_key_exists('UI', $path)) {
                $path += ['UI' => ['type' => $request->type, 'costume0' => [], 'costume1' => [],]];
            } else {
                $path['UI']['type'] = $request->type;
            }
            $user->update([
                'json_config' => json_encode($path),
            ]);
        } else {
            $validated = $request->validate([
                'skin'   => ["required", new Skins],
                'icons'  => ["required", new Skins],
                'font'   => ["required", "string"],
                'button' => ["required", "string"],
            ]);
            if ($validated) {
                $path['theme'] = ['skin' => $request->skin, 'icons' => $request->icons, 'font' => $request->font, 'besthex' => $request->hex, 'button' => $request->button, 'pure' => false];
                $user->update([
                    'json_config' => json_encode($path),
                ]);
                $user->save();
            }
        }
        return back()->with([
            'type' => 'success',
            'message' => 'Your changes has been modified!'
        ]);
    }
}
