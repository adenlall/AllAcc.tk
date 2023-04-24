<?php

namespace App\Helpers;

use App\Models\User;
use App\Helpers\Validate;

class Setup
{

     public $user;
     private $path;
     
    
    function __construct(User $user) {
        $this->user = $user;
        $this->path =  json_decode($this->user->json_config, true);
    }

    public function ini(array $section){
        if ($section[0]) {
            $this->iniDashboard();
        }
        if ($section[1]) {
            $this->iniSkins();
        }
        if ($section[2]) {
            $this->iniAdvanced();
        }
        if ($section[3]) {
            $this->iniStatistics();
        }
        $this->save();
        $this->updateVersion();

    }
    private function save()
    {
        $this->user->update([
            'json_config' => json_encode($this->path)
        ]);
    }
    private function updateVersion()
    {
        $this->user->update([
            'version' => env("APP_VERSION")
        ]);
    }

    /**
     * 
     * set funcs
     * 
     */

    public function setTheme($val){
        try {

            $this->path["theme"] = $val;
            $this->save();
        } catch (\Throwable $th) {
            return false;
        }
    }
    public function setUI($val){
            if(Validate::UItype($val)){
                $this->path["UI"]["type"] = $val;
            }
            if(Validate::CustomeNum($val)){
                $this->path["UI"]["active"] = $val;
            }
            else{
                if($this->path["UI"]["active"] == "custome1" || $this->path["UI"]["active"] == "custome2"){
                    $this->path["UI"][$this->path["UI"]["active"]] = $val;
                }
            }
            $this->save();
    }




    /**
     * 
     * init funcs
     * 
     */

     
    private function iniDashboard(){
        $this->path['config'] = ["urlsGrps"=>[]];
        $this->path['services'] = [
            "cdn"=>[],
            "emails"=>[],
            "phones"=>[],
            "locations"=>[]
        ];
        $this->path['urls'] = [];
        $this->path['advanced'] = ["from"=>[]];
    }
    private function iniSkins(){
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
    
        $this->path['theme'] = [
            "skin"=>"RPG",
            "icons"=>"rB",
            "font"=>"Gracheva",
            "hex"=>"",
            "button"=>"roundedborderbtn",
            "pure"=>true
        ];
        $this->path['UI'] = [
            "type"=>"JSX",
            "active"=>"costume1",
            "costume1"=>$arrr,
            "costume2"=>$arrr
        ];
    }
    private function iniAdvanced(){
        $this->path['visible'] = [
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
            ];
        $this->path['advanced'] = [
            "from"=>[],
            "html"=>[],
        ];
    }
    private function iniStatistics(){
        $this->path['statistics'] = ['services' => [], 'links' => []];
        $this->user->update([
            'json_locate' => json_encode(['logs' => []])
        ]);
    }

    
    
    /**
     * @function Check Dashboard Config
     * return true if there was no data losing
     * return false if there was data losing
     */
    private function checkDashboardConfig() : bool {
        if(array_key_exists("config", $this->path)){
            if(array_key_exists("urlsGrps", $this->path["config"])){
                if(count($this->path["config"]["urlsGrps"] !== 0)){
                    for($i=0; $i<count($this->path["config"]["urlsGrps"]); $i++){
                        if(!count($this->path["config"]["urlsGrps"][$i]) == 1){
                            unset($this->path["config"]["urlsGrps"][$i]);
                        }
                    }
                    $this->path["config"]["urlsGrps"] = array_values($this->path["config"]["urlsGrps"]);
                    return true;
                }
            }
        }
        $this->path['config'] = ["urlsGrps"=>[]];
        return false;
    }
    
    /**
     * @function Check Dashboard Urls
     * return true if there was no data losing
     * return false if there was data losing
     */
    private function checkDashboardUrls() : bool {
        if(count($this->path['urls'] !== 0)){
            for($i=0; $i<count($this->path['urls']); $i++){
                if(array_key_exists("name", $this->path['urls'][$i])){
                    if(!gettype($this->path['urls'][$i]) == "string"){
                        unset($this->path['urls'][$i]);
                        continue;
                    }
                }
                if(array_key_exists("link", $this->path['urls'][$i])){
                    if(!gettype($this->path['urls'][$i]) == "string"){
                        unset($this->path['urls'][$i]);
                        continue;
                    }
                }
                if(array_key_exists("grp", $this->path['urls'][$i])){
                    if(!gettype($this->path['urls'][$i]) == "string" AND !gettype($this->path['urls'][$i]) == "NULL"){
                        unset($this->path['urls'][$i]);
                        continue;
                    }
                }
                if(array_key_exists("id", $this->path['urls'][$i])){
                    if(!gettype($this->path['urls'][$i]) == "integer"){
                        unset($this->path['urls'][$i]);
                        continue;
                    }
                }
            }
            
            
            $this->path['urls'] = array_values($this->path['urls']);
            return true;
        }
        $this->path['urls'] = [];
        return false;
    }
    
    
    
    
}
