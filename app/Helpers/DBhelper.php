<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DBhelper
{

    static public function tableInc($page)
    {
        try {
            $rec = DB::table('statistic')->where('page', $page);
            $rec->increment('visits');
            if (Auth::check()) {
                $rec->increment('auth_v');
            } else {
                $rec->increment('guest_v');
            }
            return true;
        } catch (\Throwable $th) {
            return false;
        }

    }
}
