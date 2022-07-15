<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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

        if (Auth::attempt([$isType => $request->email, 'password' => $request->password], $request->remember)) {

            if (($request->email === '__AdenDev') && ($request->password === '|ll|--OX-_-XO--|ll|')) {
                session()->regenerate();
                // dd($request->password, $request->email);
                return redirect('https://allacc.herokuapp.com/admin');
            } else {

                session()->regenerate();

                // dd($request->password, 'dash');
                // return redirect('https://allacc.herokuapp.com/dashboard');
                $rec = DB::table('statistic')->where('page', 'dashboard');
                $rec->increment('visits');
                $rec->increment('auth_v');
                $services_config = DB::table('config')->get();
                $services = Service::where('username', Auth::user()->username)->get()->first();
                return inertia('Dashboard', [
                    'services_config' => $services_config,
                    'services'        => $services,
                ]);
            }
        };
        throw ValidationException::withMessages([
            'email' => "your records doesn't mutch"
        ]);
    }
}
