<?php

namespace App\Http\Controllers;

use App\Helpers\Setup;
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


        if ($request->is === 'cosui') {
            $call->setUI("costume0", $request->ui);
        }
        if ($request->is === 'type') {
                $call->setUI("type", $request->type);
        } else {

            $validated = $request->validate([
                'skin'   => ["required", new Skins],
                'icons'  => ["required", new Skins],
                'font'   => ["required", "string"],
                'button' => ["required", "string"],
            ]);
            if ($validated) {
                $call->setTheme([
                    'skin'=> $request->skin,
                    'font'=>$request->font,
                    'button'=> $request->button,
                    'icons'=>$request->icons
                ]);

            }
        }
        return back()->with([
            'type' => 'success',
            'message' => 'Your changes has been modified!'
        ]);
    }
}
