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
        $this->path = [];
        $this->save();
    }
    public function set($arr){
        try {
            $temp_arr = [];
            for ($i=0; $i < sizeof($arr); $i++) { 
                $temp_arr = $this->path[$arr[$i]];
            }
        } catch (\Throwable $th) {
            return false;
        }
    }
} 