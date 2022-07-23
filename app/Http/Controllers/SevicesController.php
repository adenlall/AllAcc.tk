<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\User;
use App\Rules\Nospace;
use Illuminate\Support\Facades\Auth;

class SevicesController extends Controller
{
    //

    public function __invoke(Request $request)
    {

        if ($request->is === 'cdn') {

            $data = $request->data;
            $serv = $request->service;
            $user = User::where('username', Auth::user()->username)->first();
            $path = json_decode($user->json_config, true);

            if (!array_key_exists($serv, $path['services']['cdn'])) {
                $path['services']['cdn'] += [$serv => $data];
                $user->update(['json_config' => json_encode($path)]);
            } else {
                $path['services']['cdn'][$serv] = $data;
                $user->update(['json_config' => json_encode($path)]);
                dd($path);
            }
            // dd($path);
            return back()->with([
                'type' => 'success',
                'message' => "{$request->services} cdn is active!"
            ]);
        } else {

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
}
