<?php

namespace App\Helpers;

use App\Models\User;
use Illuminate\Support\Facades\File;
use Jenssegers\Agent\Facades\Agent;
use Predis\Command\Redis\SAVE;

class Setup
{

     public $user;
     public $path;

     function __construct($user) {
        $this->user = $user;
        $this->path =  json_decode($this->user->json_config, true);
      }
    private function save()
    {
        $this->user->update([
            'json_config' => json_encode($this->path)
        ]);
    }
    public function ini(){
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

        $this->path = [
            "UI"=>[
                "type"=>"JSX",
                "costume0"=>$arrr,
                "costume1"=>$arrr
            ],
            "theme"=>[
                "skin"=>"RPG",
                "icons"=>"rB",
                "font"=>"Gracheva",
                "hex"=>"",
                "button"=>"roundedborderbtn",
                "pure"=>true
            ],
            "visible"=>[
                "type"=>"public",
                "secret"=>[
                    [
                        "active"=>false,
                        "key"=>0000,
                        "expiration"=>"forever",
                        "members"=>0,
                        "for"=>[
                            "services"=>[],
                            "urls"=>[]
                        ]
                    ]
                ]
            ],
            "services"=>["cdn"=>[]],
            "urls"=>[],
            "config"=>[
                "urlsGrps"=>[]
            ],
            "advanced"=>[
                "from"=>[]
            ],
            "statistics"=>[
                "services"=>[],
                "links"=>[]
            ]
        ];
        $this->save();
    }
    public function setTheme($val){
        try {

            $this->path["theme"] = $val;
            $this->save();
        } catch (\Throwable $th) {
            return false;
        }
    }
    public function setUI($key, $val){
        try {

            $this->path["UI"][$key] = $val;
            $this->save();

        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
