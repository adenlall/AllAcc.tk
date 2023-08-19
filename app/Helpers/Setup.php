<?php

namespace App\Helpers;

use App\Models\User;
use App\Helpers\Validate;
use Illuminate\Support\Facades\Auth;


class Setup
{

     public $user;
     private $path;
     protected $config;
     protected $services;
     protected $advanced;
     protected $theme;
     protected $cos_ui;
     protected $ui;
     protected $urls = [];
     protected $visible;
     protected $adv;
     protected $statistics;

    
    function __construct(User $user) {
        $this->user = $user;
        $this->path =  json_decode($this->user->json_config, true);
        
        $this->cos_ui = ['bg'=> '#afd9ff','to_draw'=> ['bg'=> '#334155','text'=> '#ffffff','button'=> ['bg'=> '#ffffff',]],'draw'=> ['bg'=> '#307070','items'=> ['bg'=> '#1e293b','rounded'=> 'lg','main_txt'=> '#ffffff','username'=> ['txt'=> '#ffffff','bg'=> '#93c5fd'],'img'=> ['background'=> '#ffffff','rounded'=> 'lg']]],'profile'=> ['img'=> ['bg'=> '#ffffff','rounded'=> 'lg'],'txt'=> '#000000'],'links'=> ['grp'=> ['bg'=> '#5fb6cf','txt'=> '#374151'],'bg'=> '#80acbc'],"img" => "/imgs/config/RPG/Header/0.jpg"];
    
        $this->config = ["urlsGrps"=>[]];
        $this->services = ["cdn"=>[],"emails"=>[],"phones"=>[],"locations"=>[]];
        $this->advanced = ["from"=>[]];
        $this->theme = ["skins"=>"RPG","icons"=>"rB","font"=>"Gracheva","hex"=>"","button"=>"roundedborderbtn","pure"=>true];
        $this->ui = ["type"=>"JSX","active"=>"custom1","custom1"=>$this->cos_ui,"custom2"=>$this->cos_ui];
    
        $this->visible = ["type"=>"public","secret"=>[["active"=>false,"key"=>0000,"expiration"=>"forever","members"=>0,"for"=>["services"=>[],"urls"=>[]]]]];
        $this->adv = ["from"=>[],"html"=>[]];

        $this->statistics = ['services' => [], 'links' => []];

    }


    /**
     * 
     * @param bool $all        = false
     * @param bool $dashboard  = false
     * @param bool $skins      = false
     * @param bool $advanced   = false
     * @param bool $statistics = false
     * 
     * @return void
     * 
     */
    public function ini(bool $all = false, bool $dashboard = false, bool $skins = false, bool $advanced = false, bool $statistics = false){
        if ($dashboard OR $all) {
            $this->iniDashboard();
        }
        if ($skins OR $all) {
            $this->iniSkins();
        }
        if ($advanced OR $all) {
            $this->iniAdvanced();
        }
        if ($statistics OR $all) {
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
            'version' => env("APP_VERSION"),‏
        ]);
    }
    static public function checkVersion(bool $update)
    {
        if(Auth::user()->version == env("APP_VERSION")){
            return true;
        }else{
            if ($update) {
                # @TODO: add private methode to check every key in json data
            }            
            return false;
        }
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
        if(gettype($val) == "string"){

            if(Validate::UItype($val)){
                $this->path["UI"]["type"] = $val;
                $this->save();
                return;
            }
            if(Validate::CustomNum($val)){
                $this->path["UI"]["active"] = $val;
                $this->save();
                return;
            }
        } if(gettype($val) == "array"){
            if(count($val, 1)==count($this->cos_ui, 1)){
                if($this->path["UI"]["active"] == "custom1" || $this->path["UI"]["active"] == "custom2"){
                    $this->path["UI"][$this->path["UI"]["active"]] = $val;
                    $this->save();
                    return;
                }
            }
        }
    }


    /**
     * 
     * init funcs
     * 
     */
    private function iniDashboard(){
        $this->path['config'] = $this->config;
        $this->path['services'] = $this->services;
        $this->path['urls'] = $this->urls;
        $this->path['advanced'] = $this->advanced;
    }
    private function iniSkins(){
        $this->path['theme'] = $this->theme;
        $this->path['UI'] = $this->ui;
    }
    private function iniAdvanced(){
        $this->path['visible'] = $this->visible;
        $this->path['advanced'] = $this->adv;
    }
    private function iniStatistics(){
        $this->path['statistics'] = $this->statistics;
        $this->user->update([
            'json_locate' => json_encode(['logs' => []])
        ]);
    }


    
}
