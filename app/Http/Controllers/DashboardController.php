<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $services_config = DB::table('config')->get();
        if (Service::where('username', $request['username'])->exists()) {
        }else{
            Service::create([
                'username' => Auth::user()->username,
            ]);
        }
        $services = Service::where('username', Auth::user()->username)->get()->first();
        return inertia('Dashboard', [
            'services_config' => $services_config,
            'services'        => $services,
        ]);
    }


}
