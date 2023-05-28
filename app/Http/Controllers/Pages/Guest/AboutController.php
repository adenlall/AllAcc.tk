<?php


namespace App\Http\Controllers\Pages\Guest;

use App\Http\Controllers\Controller;

use App\Helpers\DBhelper;
use App\Helpers\Setup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AboutController extends Controller
{
    //

    public function __invoke()
    {
        DBhelper::tableInc("about");
        return inertia('About');
    }
}
