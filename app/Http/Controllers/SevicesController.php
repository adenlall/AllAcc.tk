<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Rules\Nospace;
use Illuminate\Support\Facades\Auth;

class SevicesController extends Controller
{
    //

    public function __invoke(Request $request)
    {

        $validated = $request->validate([
            'name' => ['required'],
            'username' => ['required'],
            'data' => ['required', new Nospace],
        ]);

        if ($validated) {

            Service::where('username', Auth::user()->username)->first()->update([
                $request['name'] => $request['data'],
            ]);
        }

        return back()->with([
            'type' => 'success',
            'message' => "{$request['name']} record has been modified!"
        ]);

    }
}
