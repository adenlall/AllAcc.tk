<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\Setup;
use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\User;
use App\Rules\Nospace;
use App\Rules\Username;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    public function create()
    {
        if(Auth::check()){
            return redirect('dashboard');
        }else{
            return inertia('Auth/Auth');
        }
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => ['required'],
            'username' => ['required', 'unique:users', new Username, new Nospace],
            'email' => ['required', 'unique:users'],
            'password' => ['required'],
            'country' => ['nullable'],
            'birthday' => ['nullable']
        ]);

        if ($validated) {
            $newUser = User::create($validated);
            $newUser->save();
            Auth::login($newUser);
            Service::create([
                'username' => $request->username
            ]);


        $call = new Setup(Auth::user());
        $call->ini(all: true);
        
        return redirect('/profile');
    }

        throw ValidationException::withMessages([
            'email' => 'The provide credentials does not match our record.',
        ]);
    }
}
