<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Spatie\Activitylog\Models\Activity;

class SevicesController extends Controller
{
    //

    public function __invoke(Request $request)
    {

        $validated = $request->validate([
            'name' => ['required'],
            'username' => ['required'],
            'data' => ['required'],
        ]);

        if ($validated) {

            Service::where('username', Auth::user()->username)->update([
                $request['name'] => $request['data'],
            ]);


            return redirect('/dashboard')->with([
                'type' => 'success',
                'message' => "{$request['name']} record has been modified!"
            ]);
        }

    }
}
