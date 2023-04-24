<?php

namespace App\Helpers;

class Validate
{
    
    static public function UItype(string $val) : bool
    {
        try{
            
        $arr = ['blade', 'JSX'];
        for($i=0; $i<count($arr); $i++){
            if($arr[$i] == $val){
                return true;                
            }
        }                
        return false;
        } catch (\Throwable $th) {
            //throw $th;
        return false;
        }
        

    }
    static public function CustomeNum(string $val) : bool
    {
        $arr = ['custome0', 'custome1', 'editor0', 'editor1'];
        for($i=0; $i<count($arr); $i++){
            if($arr[$i] == $val){
                return true;                
            }
        }                
        return false;
    }

    
    
    
}