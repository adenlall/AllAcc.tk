<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class AdminPagesController extends Controller
{

    function statistic($admin){
        if(Admin::where('username',$admin)->exists()){
        // data to send
            $pages_s = DB::table('statistic')->orderBy('visits','desc')->select('page', 'visits','auth_v', 'guest_v')->get();
            return Inertia('AdminStatistic')->with([
                'pages'=>$pages_s,
            ]);
        }else{

            if(session()->has('admin_token')){

                $tk = Crypt::decrypt(session()->get('admin_token'));

                if(Admin::where('token',$tk)->exists()){
                    $dm = Admin::where('token',$tk)->get()->first();
                    return redirect("/admin/{$dm->username}/statistic");
                }else{
                    Session::flush();
                    Auth::logout();
                    return redirect('/');
                }

            }else{
                return redirect('/admin');
            }
        }

    }


    function activities($admin){
        if(Admin::where('username',$admin)->exists()){
        // data to send
        $select = ['id','name','username','birthday','visit','created_at','updated_at'];
            $first_u = User::oldest()->select($select)->take(5)->get();
            $last_u  = User::latest()->select($select)->take(5)->get();
            $most_v  = User::orderBy('visit', 'desc')->select($select)->take(3)->get();
            $last_up  = User::orderBy('updated_at', 'desc')->select($select)->take(3)->get();
            $oldest_u  = User::whereNotNull('birthday')->orderBy('birthday', 'asc')->select($select)->take(3)->get();
            // dd($last_v);

            return Inertia('AdminActivities')->with([
                'usersF' =>$first_u,
                'usersL' =>$last_u,
                'mostV'  =>$most_v,
                'lastUP'  =>$last_up,
                'oldestU'=>$oldest_u,
            ]);
        }else{

            if(session()->has('admin_token')){

                $tk = Crypt::decrypt(session()->get('admin_token'));

                if(Admin::where('token',$tk)->exists()){
                    $dm = Admin::where('token',$tk)->get()->first();
                    return redirect("admin/{$dm->username}/activities");
                }else{
                    Session::flush();
                    Auth::logout();
                    return redirect('/');
                }

            }else{
                return redirect('admin');
            }
        }

    }


    function app($admin){
        if(Admin::where('username',$admin)->exists()){
        // data to send


            return Inertia('AdminApp');
        }else{

            if(session()->has('admin_token')){

                $tk = Crypt::decrypt(session()->get('admin_token'));

                if(Admin::where('token',$tk)->exists()){
                    $dm = Admin::where('token',$tk)->get()->first();
                    return redirect("admin/{$dm->username}/app");
                }else{
                    Session::flush();
                    Auth::logout();
                    return redirect('/');
                }

            }else{
                return redirect('admin');
            }
        }



    }
}
