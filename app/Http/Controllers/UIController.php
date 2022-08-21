<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UIController extends Controller
{
    //
    function __invoke(Request $request)
    {

        $user = User::find(Auth::user()->id);
        $path = json_decode($user->json_config, true);
        if (!array_key_exists('UI', $path)) {
            $path += ['UI' => ['type' => 'JSX', 'costume0' => [
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
            ], 'costume1' => [
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
            ],]];
            $user->update([
                'json_config' => json_encode($path),
            ]);
        } else { 
            if (empty($path['UI']['costume0'])) {
                $path['UI']['costume0'] = [
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

                    $user->update([
                        'json_config' => json_encode($path),
                    ]);

                }
        }

        $skins = DB::table('skin')->select('name')->get();

        return Inertia('interface/UI')->with([
            "cosUI"=> $path['UI']['costume0'],
            "skins"=> $skins
        ]);
    }
}
