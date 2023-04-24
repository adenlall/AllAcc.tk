<?php

namespace App\Http\Controllers;

use App\Helpers\DBhelper;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
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

        $services_config = Cache::remember('config', now()->addHours(72), function() {
            return DB::table('config')->get();
        });
        $services = Service::where('username', Auth::user()->username)->get()->first();
        DBhelper::tableInc("dashboard");

        //dd($services);
        //dd($services_config);
        return inertia('Dashboard', [
            'services_config' => $services_config,
            'services'        => $services,
        ]);
    }


}
