<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    //
    function index()
    {
        if(session()->has('admin_token')){
            $token = session()->get('admin_token');
            if(Admin::where('token', Crypt::decrypt($token))->exists()){
                $data = Admin::where('token', Crypt::decrypt($token))->get()->first();
                // dd($data ,$data->email, $data->username ,$data->token);
                return redirect("admin/{$data->username}/dashboard");
            }else{
                return Inertia('AdminAuth');
            }
        }else{
            return Inertia('AdminAuth');
        }
    }

    function verify(Request $request)
    {


        $num = session()->get('try');
        if ($num === '=> end') {
            $que =  "Your are blocked to try again!";
        } else {
            $que =  "incorrect records!";
        }


        $request->validate([
            'username' => ['required'],
            'nickname' => ['required'],
            'token'    => ['required'],
            'secret'   => ['required'],
        ]);

        $record = Admin::find([
            'username' => $request->username,
            'secret'   => $request->secret,
            'name' => $request->nickname,
            'token'    => $request->token,
        ])->first();

        if ($record === null) {

            if ('=> 0' === Crypt::decrypt($num)) {

                $request->session()->put('try', Crypt::encrypt('=> 1'));

            } elseif ('=> 1' === Crypt::decrypt($num)) {

                $request->session()->put('try', Crypt::encrypt('=> 2'));

            } elseif ('=> 2' === Crypt::decrypt($num)) {

                $request->session()->put('try', Crypt::encrypt('=> 3'));

            } elseif ('=> 3' === Crypt::decrypt($num)) {

                $request->session()->put('try', Crypt::encrypt('=> end'));

            }

            return redirect('/admin')->with([
                'type' => 'error',
                'message' => $que,
            ]);

        } else {
            // dd('fuck-off', $record);
            $request->session()->put('admin_token', Crypt::encrypt($request->token));
            $data = Admin::where('token', $request->token)->get()->first();
            // dd($data,"admin/{$data->username}/dashboard", Admin::where('token', $request->token)->get()->first());
            return redirect("admin/{$data->username}/dashboard");
        }

    }

    function dashboard($admin)
    {
        $path = $admin;
        // Admin::where('username', $path)->exists()
        $token = session()->get('admin_token');
        $data = Admin::where('token', Crypt::decrypt($token))->get()->first();

        if(Admin::where('token', Crypt::decrypt($token))->exists()){

            $aa_admin = Admin::where('username', $path)->get()->first();

            if($aa_admin && $aa_admin->token === $data->token){
                return Inertia('Admin',[
                    'admin' => $data,
                    'users' => User::paginate(15),
                ]);
            }else{
                // dd('hello');
                return redirect("admin/{$data->username}/dashboard");

            }

        }else{

            $token = session()->get('admin_token');
            // dd('not here',$path, Admin::where('token', Crypt::decrypt($token))->get()->first());
            abort(404);

        }
    }


}
