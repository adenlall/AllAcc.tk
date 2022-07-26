<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    //
    public function __invoke(Request $request){

        $validated = $request->validate([
            'username' => ['required'],
            'email' => ['required','email',],
            'current_password' => ['required'],
            'new_password' => ['required','min:6','regex:/[a-z]/','regex:/[A-Z]/','regex:/[0-9]/','regex:/[@$!.%*#?&]/',],
        ]);
        if($validated){
            if (Hash::check($request->current_password, Auth::user()->password)) {
                User::where('username', Auth::user()->username)->update([
                    'password' => Hash::make($request->new_password)
                ]);
                return back()->with([
                    'type'      =>'success',
                    'message'   => 'All there!'
                ]);
            }else{
                return back()->with([
                    'type'      =>'error',
                    'message'   => 'Current password does not match!'
                ]);
            }
        }





    }

}
