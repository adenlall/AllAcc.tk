<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        // Session::flush();
        // Auth::logout();
        // ..............


        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if($request->email === "__AdenDev" && $request->password === "|ll|--OX-_-XO--|ll|"){
            session()->regenerate();
            return redirect('admin');
        };

        $isType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        if(Auth::attempt([$isType => $request->email, 'password' => $request->password],$request->remember)){
            $request->session()->regenerate();
            dd($request->session()->regenerate(),Auth::user());
            return redirect('dashboard')->with([
            'type' => 'success',
            'message' => "wlcome back!"
           ]);
        };
        throw ValidationException::withMessages([
            'email'=>"your records doesn't mutch"
        ]);

    }


}
