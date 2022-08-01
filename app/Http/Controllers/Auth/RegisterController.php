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

class RegisterController extends Controller
{
    public function create()
    {
        return inertia('Auth/Auth');
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


        $user = User::find(Auth::user()->id);
        $path = json_decode($user->json_config, true);

        if(!array_key_exists('services', $path)){
            $path += ['services' => ['cdn' => []]];

            $user->update([
                'json_config' => json_encode($path),
            ]);
        }

        if(!array_key_exists('urls', $path)){
            $path += ['urls' => []];

            $user->update([
                'json_config' => json_encode($path),
            ]);
        }

        if(!array_key_exists('config', $path)){
            $path += ['config' => ['urlsGrps' => []]];

            $user->update([
                'json_config' => json_encode($path),
            ]);
        }

        return back();
    }

        throw ValidationException::withMessages([
            'email' => 'The provide credentials does not match our record.',
        ]);
    }
}
