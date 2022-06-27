<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPagesController extends Controller
{

    function statistic($admin){
        if(Admin::where('username',$admin)->exists()){
        // data to send
        
        
        
            return Inertia('AdminStatistic');
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
        
        
        
            return Inertia('AdminActivities');
        }else{
        
            if(session()->has('admin_token')){
            
                $tk = Crypt::decrypt(session()->get('admin_token'));
                
                if(Admin::where('token',$tk)->exists()){
                    $dm = Admin::where('token',$tk)->get()->first();
                    return redirect("/admin/{$dm->username}/activities");
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
    
    
    function app($admin){
        if(Admin::where('username',$admin)->exists()){
        // data to send
        
        
            return Inertia('AdminApp');
        }else{
        
            if(session()->has('admin_token')){
            
                $tk = Crypt::decrypt(session()->get('admin_token'));
                
                if(Admin::where('token',$tk)->exists()){
                    $dm = Admin::where('token',$tk)->get()->first();
                    return redirect("/admin/{$dm->username}/app");
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
}
