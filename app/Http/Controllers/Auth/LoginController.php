<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function create()
    {
        if(Auth::check()){
            return redirect('/dashboard');
        }else{
            return inertia('Auth/Login');
        }
    }

    public function store(Request $request)
    {


        if(Auth::check()){
            return redirect('/dashboard');
        }else{
        // security...
        // Session::flush();
        // Auth::logout();
        // ..............


        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        $isType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if(Auth::attempt([$isType => $request->email, 'password' => $request->password],$request->remember)){

            if(($request->email === env("ADMIN")) && ($request->password === env("PASS")))
            {
                session()->regenerate();
                return redirect('admin');
            }else{
                session()->regenerate();
                return redirect('dashboard');
            }


        };
        throw ValidationException::withMessages([
            'email'=>"your records doesn't mutch"
        ]);

    }
    }


}
