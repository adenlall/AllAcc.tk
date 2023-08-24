<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

use function PHPSTORM_META\type;

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
                // dd("here  698686x96x57x57x0");
                return redirect("admin/{$data->username}/dashboard");
            }else{
                return Inertia('Admin/AdminAuth');
            }
        }else{
            return Inertia('Admin/AdminAuth');
        }
    }

    function verify(Request $request)
    {
        $num = session()->get('try');
        if ($num >= 3) {
            $que =  "Your are blocked to try again!";
            Cache::set("blocked-".$request->ip);
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

            $ind = $num ? $num : 1;
            $request->session()->put('try', $ind+1);

            Admin::where('username', $request->username)->increment('visit');
            return redirect('admin')->with([
                'type' => 'error',
                'message' => $que,
            ]);

        } else {
            $request->session()->put('admin_token', Crypt::encrypt($request->token));
            $data = Admin::where('token', $request->token)->get()->first();
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
                return Inertia('Admin/Admin',[
                    'admin' => $data,
                    'users' => User::paginate(15),
                ]);
            }else{
                return redirect("admin/{$data->username}/dashboard");
            }

        }else{
            abort(404);
        }
    }


}
