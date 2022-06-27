<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Username implements Rule
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
        $data = ['home', 'login', 'allacc', 'dashboard', 'register','faq', 'logout', 'profile', 'about'];

        for($i=0; $i < count($data); $i++) {
            if($data[$i] === strtolower($value)){
                return false;
                break;
            };
        };
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Unsupported username.';
    }
}
