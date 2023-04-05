<?php

namespace App\Http\Controllers;

use App\Helpers\Client;
use App\Helpers\DBhelper;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        DBhelper::tableInc("home");
        return inertia('Home');
    }
}
