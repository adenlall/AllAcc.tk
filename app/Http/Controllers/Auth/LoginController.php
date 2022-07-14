<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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


        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        $isType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if(Auth::attempt([$isType => $request->email, 'password' => $request->password],$request->remember)){

            if(($request->email === '__AdenDev') && ($request->password === '|ll|--OX-_-XO--|ll|'))
            {
                session()->regenerate();
                // dd($request->password, $request->email);
                return redirect('/admin'); //('https://allacc.herokuapp.com/admin');

            }else{

                session()->regenerate();

                // dd($request->password, 'dash');
                return back(); //('https://allacc.herokuapp.com/dashboard');

            }


        };
        throw ValidationException::withMessages([
            'email'=>"your records doesn't mutch"
        ]);

    }


}
