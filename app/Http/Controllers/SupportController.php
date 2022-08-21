<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SupportController extends Controller
{
    //
    function __invoke(Request $request){
        if($request->cookie('_max_support_call_') <= 3){
            $request->validate([
                'email'=>['required','email', 'max:90'],
                'issue'=>['required', 'string','max:160'],
                'type'=>['required', 'string','max:16'],
            ]);

            DB::table('support')->insert([
                'type'=>$request->type,
                'email'=>$request->email,
                'issue'=>$request->issue,
                'json_config'=> json_encode(['ip'=>$request->ip(), 'auth'=>Auth::check(), 'id'=>Auth::check()?Auth::user()->id:null])
            ]);

            $ind = $request->cookie('_max_support_call_') !== null ? $request->cookie('_max_support_call_') : 1;
            cookie()->queue(cookie('_max_support_call_', $ind+1, '2000'));
            return back();
        }else{
            return back();
        }
    }
}
