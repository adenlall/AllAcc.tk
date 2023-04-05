<?php

namespace App\Http\Controllers\Keys;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RepairController extends Controller
{
    //
    function __invoke(Request $request)
    {
        $user = User::find(Auth()->user()->id);
        $path = json_decode($user->json_config, true);
        $locate = json_decode($user->json_locate, true);
        // dd($path);
        if ($request->dashboard === "on") {
            $path['services'] = ['cdn' => []];
            $path['urls'] = [];
            $path['config'] = ['urlsGrps' => []];

            // dd($path);
        }
        if ($request->skins === "on") {
            $path['theme'] = ['skin' => 'Ind', "icons" => "rB", "font" => "OldMe", "besthex" => null, "button" => "orangebtn", "pure" => false];
            $arr = [
                'bg' => '#afd9ff',
                'to_draw' => [
                    'bg' => '#334155',
                    'text' => '#ffffff',
                    'button' => [
                        'bg' => '#ffffff',
                    ]
                ],
                'draw' => [
                    'bg' => '#307070',
                    'items' => [
                        'bg' => '#1e293b',
                        'rounded' => 'lg',
                        'main_txt' => '#ffffff',
                        'username' => [
                            'txt' => '#ffffff',
                            'bg' => '#93c5fd'
                        ],
                        'img' => [
                            'background' => '#ffffff',
                            'rounded' => 'lg'
                        ]
                    ]
                ],
                'profile' => [
                    'img' => [
                        'bg' => '#ffffff',
                        'rounded' => 'lg'
                    ],
                    'txt' => '#000000'
                ],
                'links' => [
                    'grp' => [
                        'bg' => '#5fb6cf',
                        'txt' => '#374151'
                    ],
                    'bg' => '#80acbc'
                ]
            ];
            $path['UI'] = ['type' => 'Blade', 'costume0' => $arr, 'costume1' => $arr];
        }
        if ($request->analitycs === "on") {
            $path['statistics'] = ['services' => [], 'links' => []];
            $locate = ['logs' => []];
        }
        if ($request->advanced === "on") {
            $path['advanced'] = ['from' => []];
        }
        $user->update([
            'json_config' => json_encode($path),
            'json_locate' => json_encode($locate),
        ]);
        $user->save();
        return back();
    }
}
