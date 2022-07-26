<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {

        $rec = DB::table('statistic')->where('page','home');
        $rec->increment('visits');
        if(Auth::check()){
            $rec->increment('auth_v');
        }else{
            $rec->increment('guest_v');
        }
        return inertia('Home');
    }
}
