<?php

namespace App\Http\Controllers\Pages\Auth\Dashboard;

use App\Http\Controllers\Controller;


use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeleteItemController extends Controller
{
    //

    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required'],
        ]);

        if ($validated) {
            Service::where('username', Auth::user()->username)->first()->update([
                $request['name'] => null,
            ]);
        }
        return back()->with([
            'type' => 'success',
            'message' => "{$request['name']} record has been deleted!"
        ]);
    }
}
