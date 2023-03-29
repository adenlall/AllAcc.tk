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
        $user = User::find(Auth::user()->id);
        $path = json_decode($user->json_config, true);

        if ($request->is === 'cosui') {
            $path['UI']['costume0'] = $request->ui;
            $user->update([
                'json_config' => json_encode($path),
            ]);
        }
        if ($request->is === 'type') {
            $arrr =  [
                'bg'=> '#afd9ff',
                'to_draw'=> [
                'bg'=> '#334155',
                    'text'=> '#ffffff',
                    'button'=> [
                        'bg'=> '#ffffff',
                    ]
                ],
                'draw'=> [
                    'bg'=> '#307070',
                    'items'=> [
                        'bg'=> '#1e293b',
                        'rounded'=> 'lg',
                        'main_txt'=> '#ffffff',
                        'username'=> [
                            'txt'=> '#ffffff',
                            'bg'=> '#93c5fd'
                        ],
                        'img'=> [
                            'background'=> '#ffffff',
                            'rounded'=> 'lg'
                        ]
                    ]
                ],
                'profile'=> [
                    'img'=> [
                        'bg'=> '#ffffff',
                        'rounded'=> 'lg'
                    ],
                    'txt'=> '#000000'
                ],
                'links'=> [
                    'grp'=> [
                        'bg'=> '#5fb6cf',
                        'txt'=> '#374151'
                    ],
                    'bg'=> '#80acbc'
                ]
                ];
            if (!array_key_exists('UI', $path)) {
                $path += ['UI' => ['type' => $request->type, 'costume0' => $arrr, 'costume1' => [],]];
            } else {
                $path['UI']['type'] = $request->type;
            }
            $user->update([
                'json_config' => json_encode($path),
            ]);
            $call = new Setup(Auth::user());
            $call->init();
            dd(json_decode($user->json_config, true));
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
