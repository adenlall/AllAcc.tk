<?php

namespace App\Http\Controllers;

use App\Helpers\Client;
use Illuminate\Http\Request;

class LangController extends Controller
{
    //
    function __invoke(Request $request)
    {
        $request->validate([
            'lang' => ['required', 'max:3']
        ]);
        $client = new Client;
        $client->set($request->lang);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Your changes has been modified!'
        ]);
    }
}
