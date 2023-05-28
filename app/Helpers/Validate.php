<?php

namespace App\Helpers;

class Validate
{

    static public function UItype(string $val): bool
    {
        $arr = ['Blade', 'JSX'];
        return checkexist($val, $arr);
    }
    static public function CustomNum(string $val): bool
    {
        $arr = ['custom1', 'custom2', 'editor1', 'editor2'];
        return checkexist($val, $arr);
    }


    static public function Theme(array $arr, bool $return_fixed = false): array
    {
        // @TODO: change the table from skins to app_metadata
        $c_data = Cache::remember('c_skin', now()->addHours(72), function () {
            $data = DB::table('skins')->get();
            for ($i = 0; $i < count($data); $i++) {
                array_push($skin_arr, $data[$i]->c_name);
                array_push($icon_arr, $data[$i]->c_icons);
            }
            return [$skin_arr, $icon_arr];
        });
        
        if ($return_fixed) {
        // @TODO: add verification for other values from app_metadata table
            $new_arr = [];
            $new_arr['skins']   = checkexist($arr['skins'], $c_data[0]) ? $arr['skins'] : $c_data[0][0];   
            $new_arr['icons']  = checkexist($arr['icons'], $c_data[1]) ? $arr['icons'] : $c_data[1][0];
            $new_arr['hex']    = $arr['hex'];
            $new_arr['font']   = $arr['font'];
            $new_arr['button'] = $arr['button'];
            $new_arr['pure']   = true;

            return $new_arr;
        }

        // @TODO: add verification for other values from app_metadata table
        return [checkexist($arr['skins'], $c_data[0]), checkexist($arr['icons'], $c_data[1]), true, true, true];
    }


    /**
     * Check the existence of a value on an array given
     */
    private function checkexist(string $val, array $arr): bool
    {
        try {
            //code...
            for ($i = 0; $i < count($arr); $i++) {
                if ($arr[$i] == $val) {
                    return true;
                }
            }
            return false;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
