<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    //
    function __invoke(Request $request)
    {
        return Inertia('Statistics');
    } 
}
