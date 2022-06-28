<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
        $services = Service::where('username', Auth::user()->username)->get()->first();
        return inertia('Dashboard', [
            'services_config' => $services_config,
            'services'        => $services,
        ]);
    }


}
