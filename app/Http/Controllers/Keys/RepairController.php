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
        if($request->dashboard === "on"){
            if(array_key_exists('services', $path)){
                $path['services'] = ['cdn'=>[]];
            }else{
                $path[] = ['services'=>['cdn'=>[]]];
            }
            if(array_key_exists('urls', $path)){
                $path['urls'] = [];
            }else{
                $path[] = ['urls'=>[]];
            }
            if(array_key_exists('config', $path)){
                $path['config'] = ['urlsGrps'=>[]];
            }else{
                $path[] = ['config'=>['urlsGrps'=>[]]];
            }

            // dd($path);
        }
        if($request->skins === "on"){
            if(array_key_exists('theme', $path)){
                $path['theme'] = ['skin'=>'Ind',"icons"=>"rB", "font"=>"OldMe", "besthex"=>null, "button"=>"orangebtn", "pure"=>false];
            }else{
                $path[] = ['theme'=>['skin'=>'Blade',"icons"=>"rB", "font"=>"OldMe", "besthex"=>null, "button"=>"orangebtn", "pure"=>false]];
            }
            $arr = [
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
            if(array_key_exists('UI', $path)){
                $path['UI'] = ['type'=>'Blade', 'costume0'=>$arr, 'costume1'=>$arr];
            }else{
                $path[] = ['UI'=>['type'=>'blade', 'costume0'=>$arr, 'costume1'=>$arr]];
            }
            // dd($path);
        }
        if($request->analitycs === "on"){
            if(array_key_exists('statistics', $path)){
                $path['statistics'] = ['services'=>[],'links'=>[]];
            }else{
                $path[] = ['statistics'=>['services'=>[],'links'=>[]]];
            }
            $locate = ['logs'=>[]];
        }
        if($request->advanced === "on"){
            if(array_key_exists('advanced', $path)){
                $path['advanced'] = ['from'=>[]];
            }else{
                $path[] = ['advanced'=>['from'=>[]]];
            }
        }
        $user->update([
            'json_config'=>json_encode($path),
            'json_locate'=>json_encode($locate),
        ]);
        $user->save();
        return back();
    }
}
