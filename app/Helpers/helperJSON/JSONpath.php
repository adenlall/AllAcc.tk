<?php

namespace App\Helpers\helperJSON;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class JSONpath
{

    protected $user;
    protected $path;

    // @TODO: move all this staff frome here to db table "app_metadata"

    protected static $column = [
        ['config',      'dashboard'],
        ['services',    'dashboard'],
        ['urls',        'dashboard'],
        ['theme',       'skins'],
        ['ui',          'skins'],
        ['advanced',    'advanced'],
        ['visible',     'advanced'],
        ['statistics',  'statistics'],
    ];

    protected $cos_ui     = ['bg' => '#afd9ff', 'to_draw' => ['bg' => '#334155', 'text' => '#ffffff', 'button' => ['bg' => '#ffffff',]], 'draw' => ['bg' => '#307070', 'items' => ['bg' => '#1e293b', 'rounded' => 'lg', 'main_txt' => '#ffffff', 'username' => ['txt' => '#ffffff', 'bg' => '#93c5fd'], 'img' => ['background' => '#ffffff', 'rounded' => 'lg']]], 'profile' => ['img' => ['bg' => '#ffffff', 'rounded' => 'lg'], 'txt' => '#000000'], 'links' => ['grp' => ['bg' => '#5fb6cf', 'txt' => '#374151'], 'bg' => '#80acbc'], "img" => "/imgs/config/RPG/Header/0.jpg"];
    protected $visible    = ["type" => "public", "secret" => [["active" => false, "key" => 0000, "expiration" => "forever", "members" => 0, "for" => ["services" => [], "urls" => []]]]];
    protected $theme      = ["skins" => "RPG", "icons" => "rB", "font" => "Gracheva", "hex" => "", "button" => "roundedborderbtn", "pure" => true];
    protected $services   = ["cdn" => [], "emails" => [], "phones" => [], "locations" => []];
    protected $statistics = ['services' => [], 'links' => []];
    protected $advanced   = ["from" => [], "html" => []];
    protected $config     = ["urlsGrps" => []];
    protected $urls       = [];
    protected $ui;

    function __construct(User $user)
    {
        $this->user = $user;
        $this->path = json_decode($this->user->json_config, true);
        $this->ui   = ["type" => "JSX", "active" => "custom1", "custom1" => $this->cos_ui, "custom2" => $this->cos_ui];
    }


    protected function save()
    {
        $this->user->update([
            'json_config' => json_encode($this->path)
        ]);
    }
    protected function updateVersion(): void
    {
        $ver = env("APP_VERSION", "Master");
        $this->user->update([
            // @TODO: move APP_VERSION from .env to db table "app_metadata"
            'version' => $ver
        ]);
    }
    protected function pathExists(): bool
    {
        if(empty($this->user->json_config)){
            return false;
        }
        return true;
    }



    /**
     * return array of columns related to $page given
     * @param $page
     */
    public static function getPageColumn(string $page) : array
    {
        $ret_arr = [];
        $col = self::$column;
        for ($i=0; $i < count($col); $i++) {
            // @TODO: remove property_exists when moving to db table "app_metadata"
            if ( $col[$i][1] === $page AND property_exists(__CLASS__, $col[$i][0]) ) {
                $ret_arr[] = $col[$i][0];
            }
        }
        return $ret_arr;
    }


    /**
     * check auth user json version
     * @param bool $update true to update the version if it's not updated
     * @return true if user version is already updated
     * @return false if user version is not updated
     */
    static public function checkVersion(bool $update): bool
    {
        if (Auth::user()->version == env("APP_VERSION")) {
            return true;
        } else {
            if ($update) {
                # @TODO: add private methode to check every key in json data
                if(method_exists(__CLASS__, 'check')){
                    self::checkfeilds();
                }
            }
            return false;
        }
    }
    
    /**
     * get auth user json version 
     * @param bool $current_version true to get the version if it's not equale to user version
     * @return string if $current_version = false it return only user version as string.
     * or if $current_version = true and user version == current version 
     * @return array if $current_version = true and user version !== current version it return only user version as string 
     */
    static public function getVersion(bool $current_version): mixed
    {
        if ($current_version) {
            if (Auth::user()->version === env("APP_VERSION")) {
                return Auth::user()->version;
            } else {
                return ["user" => Auth::user()->version, "current" => env("APP_VERSION")];
            }
        } else {
            return Auth::user()->version; 
        }
        
    }
    
    static public function checkfeilds(bool $all = true): mixed
    {
        
    }

    
}


