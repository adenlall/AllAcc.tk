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
        return inertia('Auth/Login');
    }

    public function store(Request $request)
    {

        // security...
        Session::flush();
        Auth::logout();
        // ..............


        $valid = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if($valid){

            $isType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
            if (Auth::attempt([$isType => $request->email, 'password' => $request->password],$request->remember)) {

                // if($request->email === '__AdenDev' && $request->password === env("ADMIN__PASS")){
                //     session()->regenerate();
                //     return redirect('admin');
                // }

                $request->session()->regenerate();
                return redirect()->intended('dashboard');
            }

            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ])->onlyInput('email');

        }





    }


}
