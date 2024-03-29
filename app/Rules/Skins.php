<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Skins implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        // @TODO: move from here to db

        $data = [
            'icons' => ['rB', 'Vx', 'C4', 'Dr', 'oB'],
            'skins' => ['NnP', 'Vnt', 'RPG', 'BnW', 'Ind']
        ];
        
        for($i=0; $i < count($data); $i++) {
            if($value === $data[$i]){
                return true;
                break;
            }
        }
        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return '(¬_¬") - Stop playing here!';
    }
}
