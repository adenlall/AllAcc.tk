<?php

namespace App\Http\Middleware;

use App\Models\Admin;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class AdminationAccess
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
        if(session()->has('admin_token')){
            $token = session()->get('admin_token');
            // $token_pure = Crypt::decrypt($token);
            if(Admin::where('token', Crypt::decrypt($token))->exists()){
                // dd('fine');
                return $next($request);
            }else{
                return redirect('/dashboard');
            }

        }else{
            // dd('no token');
            return redirect('admin');

        }
        // return $next($request);
    }
}
