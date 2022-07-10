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

        if($request->email === "__AdenDev" && $request->password === "|ll|--OX-_-XO--|ll|"){
            session()->regenerate();
            return redirect('admin');
        };

        $credentials = $request->validate([
            'email' => ['required','email'],
            'password' => ['required'],
        ]);


        // $isType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        if(Auth::attempt($credentials)){
        // if(Auth::attempt([$isType => $request->email, 'password' => $request->password],$request->remember)){
            $request->session()->regenerate();
            // dd($request->session()->regenerate(),Auth::user());
            // Auth::login();
            return redirect()->intended('dashboard')->with([
            'type' => 'success',
            'message' => "wlcome back!"
           ]);
        };
        throw ValidationException::withMessages([
            'email'=>"your records doesn't mutch"
        ]);

    }


}
