<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

// use Inertia\Inertia;

class ProfileUpdateController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $date = date('Y-m-d');

        $validated = $request->validate([
            'id' => ['required','int'],
            'name' => ['required','string'],
            'username' => ['unique:users'],
            'email' => ['email','unique:users'],
            'birthday' => ['nullable','date','before:'.$date],
            'country' => ['nullable','string'],
            'age' => ['nullable','boolean'],
            'gender' => ['nullable','string'],
            'quote' => ['nullable','string','max:222'],
            'track' => ['nullable','string'],
            'artist' => ['nullable','string'],
        ]);
        $servicesValidate = $request->validate([
            'username' => ['unique:users'],
        ]);

        if($validated) {

            // dd($validated);
            User::where('username', Auth::user()->username)->first()->update($validated);


            if($request->username === Auth::user()->username OR $request->username === null){}else{
                Service::where('username', Auth::user()->username)->update($servicesValidate);
            }




                return redirect('/profile')->with([
                    'type' => 'success',
                    'message' => 'Your changes has been modified!'
                ]);



        }

    }
}
