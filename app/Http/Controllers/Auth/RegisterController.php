<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\User;
use App\Rules\Nospace;
use App\Rules\Username;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create()
    {
        return inertia('Auth/Register');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required'],
            'username' => ['required', 'unique:users', new Username, new Nospace],
            'email' => ['required', 'unique:users'],
            'password' => ['required'],
        ]);

        if ($validated) {
            $newUser = User::create($validated);
            $newUser->save();
            Auth::login($newUser);
            Service::create([
                'username' => $request->username
            ]);

            // return back(); //('https://allacc.herokuapp.com/dashboard');
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

        throw ValidationException::withMessages([
            'email' => 'The provide credentials does not match our record.',
        ]);
    }
}
