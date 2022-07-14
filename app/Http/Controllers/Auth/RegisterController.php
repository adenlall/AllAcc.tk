<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\User;
use App\Rules\Nospace;
use App\Rules\Username;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

            return back(); //('https://allacc.herokuapp.com/dashboard');

        }

        throw ValidationException::withMessages([
            'email' => 'The provide credentials does not match our record.',
        ]);
    }
}
