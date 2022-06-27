<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeleteItemController extends Controller
{
    //

    public function __invoke(Request $request)
    {
        Service::where('username', Auth::user()->username)->update([
            $request['name'] => null,
        ]);

        return redirect('/dashboard')->with([
            'type' => 'success',
            'message' => "{$request['name']} record has been deleted!"
        ]);

    }
}
