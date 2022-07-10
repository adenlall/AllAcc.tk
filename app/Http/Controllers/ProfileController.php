<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {

        $rec = DB::table('statistic')->where('page','profile');
        $rec->increment('visits');
        $rec->increment('auth_v');
        return inertia('Profile');
    }
}
