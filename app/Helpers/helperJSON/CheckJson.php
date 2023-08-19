<?php

namespace App\Helpers\helperJSON;

use App\Helpers\helperJSON\JSONpath;
use App\Helpers\Validators\ConfigValues;

class CheckJson extends JSONpath
{


    /**
     * fix user json_config colunm.
     * this methode can fix values & keys & structer
     * this methode can may cause user data losing.
     * you can set as parameter => [ all:true ] to check all column
     * or set one by one => [ dashboard:true, ... ].
     * all parameters take flase as default value
     * 
     * @param bool $all        check all        paths in json_column
     * @param bool $dashboard  check dashboard  paths in json_column
     * @param bool $skins      check skins      paths in json_column
     * @param bool $advanced   check advanced   paths in json_column
     * @param bool $statistics check statistics paths in json_column
     * 
     * @return void
     * 
     */
    public function fix(bool $all = false, bool $dashboard = false, bool $skins = false, bool $advanced = false, bool $statistics = false)
    {

        if(!$this->pathExists()){
            $this->ini(all:true);
            return;
        }

        if ($dashboard or $all) {
            $this->fixConfig();
            $this->fixUrls();
        }
        if ($skins or $all) {
            $this->fixSkins();
        }
        if ($advanced or $all) {
            $this->fixAdvanced();
        }
        if ($statistics or $all) {
            $this->fixStatistics();
        }
        $this->save();
        $this->updateVersion();
    }
    
    
    /**
     * check user json_config colunm.
     * this methode can may cause user data losing. 
     * you can set as parameter => [ all:true ] to check all column
     * or set one by one => [ dashboard:true, ... ].
     * all parameters take flase as default value
     * 
     * @param bool $all        check all        paths in json_column
     * @param bool $dashboard  check dashboard  paths in json_column
     * @param bool $skins      check skins      paths in json_column
     * @param bool $advanced   check advanced   paths in json_column
     * @param bool $statistics check statistics paths in json_column
     * 
     * @return void
     * 
     */
    public function check(bool $all = false, bool $dashboard = false, bool $skins = false, bool $advanced = false, bool $statistics = false)
    {

        if(!$this->pathExists()){
            $this->ini(all:true);
            $this->save();
            $this->updateVersion();
            return;
        }

        if ($dashboard or $all) {
            $this->checkConfig();
            $this->checkUrls();
        }
        if ($skins or $all) {
            $this->checkSkins();
        }
        if ($advanced or $all) {
            $this->checkAdvanced();
        }
        if ($statistics or $all) {
            $this->checkStatistics();
        }
        $this->save();
        $this->updateVersion();
    }




    // FIRST LATER CHECK !!
    ///////////////////
    // check section //
    ///////////////////
    // @TODO: add multi layer check

    /**
     * basic check & update user config
     */
    private function checkConfig(): void
    {

        $default_keys = array_keys($this->config);
        $user_keys = array_keys($this->path['config']);
        // @TODO: sort the two above arrays alphabiticly

        // check if default json keys exist in user_json
        for ($i = 0; $i < count($default_keys); $i++) {
            if (array_key_exists($default_keys[$i], $this->path['config'])) {
                continue;
            }
            $this->path['config'][$default_keys[$i]] =  $this->config[$default_keys[$i]];
        }

        $user_keys = array_keys($this->path['config']);
        // delete non valid keys in user_json
        if (count($this->path['config']) !== count($default_keys)) {
            for ($i = 0; $i < count($user_keys); $i++) {
                if (!array_key_exists($user_keys[$i], $this->connfig)) {
                    unset($this->path['config'][$user_keys[$i]]);
                }
            }
        }
    }

    /**
     * check & basic update user config
     */
    private function checkUrls(): void
    {
        if (!empty($this->path['urls'])) {
            $keys = array_keys($this->path['urls']);
            for ($i = 0; $i < count($keys); $i++) {
                if ($keys[$i] === $i) {
                    continue;
                } else {
                    unset($this->path['urls'][$i]);
                }
            }
            $this->path['urls'] = array_values($this->path['urls'][$i]);
        }
    }

    /**
     * check & basic update user config
     */
    private function checkSkins(): void
    {

        $default_keys = array_keys($this->theme);
        $user_keys = array_keys($this->path['theme']);

        // @TODO: sort arrays

        // check default keys with user keys
        for ($i = 0; $i < count($this->theme); $i++) {
            if (array_key_exists($default_keys[$i], $this->path['theme'])) {
                continue;
            }
            $this->path['theme'][$default_keys[$i]] = $this->theme[$default_keys[$i]];
        }

        // check user keys with default keys
        $user_keys = array_keys($this->path['theme']);
        if (count($this->path['config']) !== count($default_keys)) {
            for ($i = 0; $i < count($this->path['theme']); $i++) {
                if (!array_key_exists($user_keys[$i], $this->theme)) {
                    unset($this->path['theme'][$default_keys[$i]]);
                }
            }
        }

        // check values
        $this->path['theme'] = ConfigValues::checkSkins($this->path['theme']);

    }

    /**
     * check & basic update user config
     */
    private function checkAdvanced(): void
    {

        $default_keys = array_keys($this->advanced);
        $user_keys = array_keys($this->path['advanced']);

        // @TODO: sort arrays

        // check default keys with user keys
        for ($i = 0; $i < count($this->advanced); $i++) {
            if (array_key_exists($default_keys[$i], $this->path['advanced'])) {
                continue;
            }
            $this->path['advanced'][$default_keys[$i]] = $this->advanced[$default_keys[$i]];
        }

        // check user keys with default keys
        $user_keys = array_keys($this->path['advanced']);

        if (count($this->path['config']) !== count($default_keys)) {
            for ($i = 0; $i < count($this->path['advanced']); $i++) {
                if (!array_key_exists($user_keys[$i], $this->advanced)) {
                    unset($this->path['advanced'][$default_keys[$i]]);
                }
            }
        }
    }

    /**
     * check & basic update user config
     */
    private function checkStatistics(): void
    {

        $default_keys = array_keys($this->statistics);
        $user_keys = array_keys($this->path['statistics']);

        // @TODO: sort arrays

        // check default keys with user keys
        for ($i = 0; $i < count($this->statistics); $i++) {
            if (array_key_exists($default_keys[$i], $this->path['statistics'])) {
                continue;
            }
            $this->path['statistics'][$default_keys[$i]] = $this->statistics[$default_keys[$i]];
        }

        // check user keys with default keys
        $user_keys = array_keys($this->path['statistics']);

        if (count($this->path['config']) !== count($default_keys)) {
            for ($i = 0; $i < count($this->path['statistics']); $i++) {
                if (!array_key_exists($user_keys[$i], $this->statistics)) {
                    unset($this->path['statistics'][$default_keys[$i]]);
                }
            }
        }
        
    }



    // NEED TO BE AUTOMATED WITH VALIDATE::class & $this->column
    /////////////////
    // fix section //
    /////////////////

    /**
     * @return true if there was no data losing
     * @return false if there was data losing
     */
    private function fixConfig(): bool
    {
        if (array_key_exists("config", $this->path)) {
            if (count($this->path["config"]["urlsGrps"] !== 0)) {
                for ($i = 0; $i < count($this->path["config"]["urlsGrps"]); $i++) {
                    if (!count($this->path["config"]["urlsGrps"][$i]) == 1 or gettype($this->path["config"]["urlsGrps"][$i]) !== "string") {
                        unset($this->path["config"]["urlsGrps"][$i]);
                    }
                }
                $this->path["config"]["urlsGrps"] = array_values($this->path["config"]["urlsGrps"]);
                return true;
            }
            $this->path['config']["urlsGrps"] = $this->config[urlsGrps];
            return true;
        }
        $this->path['config'] = $this->config;
        return false;
    }

    /**
     * @return true if there was no data losing
     * @return false if there was data losing
     */
    private function fixUrls(): bool
    {
        if (count($this->path['urls'] !== 0)) {
            for ($i = 0; $i < count($this->path['urls']); $i++) {
                if (array_key_exists("name", $this->path['urls'][$i])) {
                    if (gettype($this->path['urls'][$i]) !== "string") {
                        unset($this->path['urls'][$i]);
                        continue;
                    }
                }
                if (array_key_exists("link", $this->path['urls'][$i])) {
                    if (gettype($this->path['urls'][$i]) !== "string") {
                        unset($this->path['urls'][$i]);
                        continue;
                    }
                }
                if (array_key_exists("grp", $this->path['urls'][$i])) {
                    if (gettype($this->path['urls'][$i]) !== "string" and gettype($this->path['urls'][$i]) !== "NULL") {
                        unset($this->path['urls'][$i]);
                        continue;
                    }
                }
                if (array_key_exists("id", $this->path['urls'][$i])) {
                    if (gettype($this->path['urls'][$i]) !== "integer") {
                        unset($this->path['urls'][$i]);
                    }
                }
            }


            $this->path['urls'] = array_values($this->path['urls']);
            return true;
        }
        $this->path['urls'] = $this->urls;
        return false;
    }

    /**
     * @return true if there was no data losing
     * @return false if there was data losing
     */
    private function fixAdvanced(): bool
    {
        if (array_key_exists("advanced", $this->path)) {
            if (array_key_exists("from", $this->path['advanced'])) {
                for ($i = 0; $i < count($this->path['advanced']['from']); $i++) {
                    if (!array_key_exists("is", $this->path['advanced']['from'][$i]) or gettype($this->path['advanced']['from'][$i]["is"]) !== "string") {
                        unset($this->path['advanced']['from'][$i]);
                        continue;
                    }
                    if (!array_key_exists("clicks", $this->path['advanced']['from'][$i]) or gettype($this->path['advanced']['from'][$i]["is"]) !== "integer") {
                        unset($this->path['advanced']['from'][$i]);
                    }
                }
                $this->path['advanced']['from'] = array_values($this->path['advanced']['from']);
                return true;
            }
        }
        $this->path['advanced'] = $this->advanced;
        return false;
    }

    /**
     * @return true if there was no data losing
     * @return false if there was data losing
     */
    private function fixStatistics(): bool
    {
        if (array_key_exists("statistics", $this->path)) {
            if (array_key_exists("services", $this->path['statistics'])) {

                $arr = $this->path['statistics']['services'];
                $arr = array_values($arr);

                for ($i = 0; $i < count($arr); $i++) {
                    // .....
                    if (gettype($arr) !== "integer") {
                        $this->path['statistics']["services"] = $this->statistics[services];
                        return false;
                    }
                }
                return true;
            }
            $this->path['statistics']['services'] = $this->statistics['services'];
            return true;
        }
        $this->path['statistics'] = $this->statistics;
        return false;
    }

    /**
     * @return true if there was no data losing
     * @return false if there was data losing
     */
    private function fixSkins(): bool
    {
        $boolean = true;
        if (array_key_exists("theme", $this->path)) {
            $keys = array_keys($this->path["theme"]);
            $values = array_values($this->path["theme"]);
            for ($i = 0; $i < count($keys); $i++) {
                if (count($keys) !== 6 or gettype($keys[$i]) !== "string") {
                    $this->path["theme"] = $this->theme;
                    $boolean = false;
                    break;
                }
            }
            for ($i = 0; $i < count($values) - 1; $i++) {
                if (gettype($values[$i]) !== "string") {
                    $this->path["theme"] = $this->theme;
                    $boolean = false;
                    break;
                }
            }
        } else {
            $this->path['theme'] = $this->theme;
            $boolean = false;
        }

        if (array_key_exists("UI", $this->path)) {

            if (count($this->cos_ui, 1) !== count($this->path['UI']['custom1'], 1)) {
                $boolean = false;
                $this->path['UI']['custom1'] = $this->cos_ui;
            }
            if (count($this->cos_ui, 1) !== count($this->path['UI']['custom2'], 1)) {
                $boolean = false;
                $this->path['UI']['custom2'] = $this->cos_ui;
            }
            if ($this->path['UI']['type'] !== "JSX" and $this->path['UI']['type'] !== "blade") {
                $boolean = false;
                $this->path['UI']['type'] = "JSX";
            }
            if ($this->path['UI']['active'] !== "custom1" and $this->path['UI']['active'] !== "custom2" and $this->path['UI']['active'] !== "editor1" and $this->path['UI']['active'] !== "editor2") {
                $boolean = false;
                $this->path['UI']['type'] = "editor1";
            }
        } else {
            $this->path['UI'] = $this->ui;
            $boolean = false;
        }

        return $boolean;
    }
}
