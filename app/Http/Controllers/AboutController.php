<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AboutController extends Controller
{
    //

    public function __invoke()
    {
        $rec = DB::table('statistic')->where('page','about');
        $rec->increment('visits');
        if(Auth::check()){
            $rec->increment('auth_v');
        }else{
            $rec->increment('guest_v');
        }
        return inertia('About');
    }
}
