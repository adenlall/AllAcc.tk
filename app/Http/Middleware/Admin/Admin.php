<?php

namespace App\Http\Middleware\Admin;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Admin
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
        // dd('hello');
        if(Auth::user()->username === env("ADMIN")){
            // dd('admin : fine');
            // dd(Auth::user()->username, "if 6855648x86875x575");
            return $next($request);
        }
            // dd(Auth::user()->username, "im here 6855648x86875x575");
            return redirect('/');

    }
}
