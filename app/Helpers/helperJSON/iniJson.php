<?php

namespace App\Helpers\helperJSON;

use App\Helpers\helperJSON\JSONpath;

class iniJson extends JSONpath
{

    
    /**
     * initialise user json_config colunm.
     * you can set as parameter => [ all:true ] to init all column
     * or set one by one => [ dashboard:true, ... ].
     * all parameters take flase as default value
     * 
     * @param bool $all        init all        paths in json_column
     * @param bool $dashboard  init dashboard  paths in json_column
     * @param bool $skins      init skins      paths in json_column
     * @param bool $advanced   init advanced   paths in json_column
     * @param bool $statistics init statistics paths in json_column
     * 
     * @return void
     * 
     */
    public function ini(bool $all = false, bool $dashboard = false, bool $skins = false, bool $advanced = false, bool $statistics = false)
    {
        if ($dashboard or $all) {
            $this->init("dashboard");
        }
        if ($skins or $all) {
            $this->init("skins");
        }
        if ($advanced or $all) {
            $this->init("advanced");
        }
        if ($statistics or $all) {
            $this->init("statistics");
            $this->user->update([
                'json_locate' => json_encode(['logs' => []])
            ]);
        }
        $this->save();
        $this->updateVersion();
    }


    /**
     * initialise all colunm related on $page given
     * @param $page string page's columns to be init
     */
    private function init(string $page) : void {

        $arr = $this->getPageColumn($page);
        for ($i=0; $i < count($arr); $i++) {
            $this->path[$arr[$i]] = $this->{$arr[$i]};
        }

    }


}