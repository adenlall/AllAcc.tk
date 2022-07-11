<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;

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
                return redirect('/admin')->with([
                    'type' => 'success',
                    'message' => 'Hey Mr. superuser, you have 3 tries to submit the correct records!'
                ]);
            }else{

                session()->regenerate();

                // dd($request->password, 'dash');
            return redirect('dashboard')->with([
                'type' => 'success',
                'message' => 'Welcome back!'
            ]);
            }


        };
        throw ValidationException::withMessages([
            'email'=>"your records doesn't mutch"
        ]);

    }


}
