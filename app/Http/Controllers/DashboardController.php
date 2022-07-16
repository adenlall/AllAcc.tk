<?php

namespace App\Http\Controllers;

use App\Models\Service;
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

        $services_config = Cache::remember('config', now()->addHours(48), function() {
            return DB::table('config')->get();
        });

        $rec = DB::table('statistic')->where('page','dashboard');
        $rec->increment('visits');
        $rec->increment('auth_v');
        $services = Service::where('username', Auth::user()->username)->get()->first();
        return inertia('Dashboard', [
            'services_config' => $services_config,
            'services'        => $services,
        ]);
    }


}
