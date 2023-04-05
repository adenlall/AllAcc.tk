<?php

namespace App\Http\Controllers;

use App\Helpers\DBhelper;
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

        DBhelper::tableInc("profile");
        return inertia('Profile');
    }
}
