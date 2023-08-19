<?php

namespace App\Helpers\Validators; 

class ConfigValues 
{
    
    public static $skins = [ // to data base
        'button' => ['orangebtn', 'oldbtn', 'roundedborderbtn', 'rgbbtn', 'purplebtn', 'blurbtn'],
        'font' => ['BeatWord', 'Calygraphy', 'Gracheva', 'OldGorgeous', 'OldMe', 'Profont'],
        'skins' => ['NnP', 'Vnt', 'RPG', 'BnW', 'Ind'],
        'icons' => ['rB', 'Vx', 'C4', 'Dr', 'oB'],
    ];
    

    static public function checkSkins(array $arr = []) : array
    {
     
        $this_skins = self::$skins;
        $keys = array_keys($this_skins);
     
        for ($i=0; $i < count($keys); $i++) { # mapping the keys 
            for ($j=0; $j < count($this_skins[$keys[$i]]); $j++) {  # mapping the keys values 
                if($arr[$keys[$i]] === $this_skins[$keys[$i]][$j]){  # check if it matches
                    continue 2;
                }
            }
            $arr[$keys[$i]] = $this_skins[$keys[$i]][0];
        }
        return $arr;
    }

    
}
