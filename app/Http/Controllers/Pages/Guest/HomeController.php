<?php

namespace App\Http\Controllers\Pages\Guest;

use App\Helpers\helperJSON\CheckJson;
use App\Helpers\Getters\Font;
use App\Http\Controllers\Controller;

use App\Helpers\DBhelper;
use App\Helpers\helperJSON\iniJson;
use Illuminate\Support\Facades\Auth;

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
