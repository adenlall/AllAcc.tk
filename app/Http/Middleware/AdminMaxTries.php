<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AdminMaxTries
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->session()->has('try')) {
            if (session()->get('try') >= 3) {
                // dd('heerre');
                // dd('max tries" fuck off');
                Session::flush();
                Auth::logout();
                return redirect("/");
            }else{
                return $next($request);
            }

        } else {
            $request->session()->put('try', 1);
            return $next($request);
        }
    }

}
