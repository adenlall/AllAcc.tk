<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class SetAdvancedController extends Controller
{
    function __invoke(Request $request)
    {
        if ($request->is === "outside") {
            $validate = $request->validate([
                'data'  => ["required"],
            ]);

            if ($validate) {
                $user = User::find(Auth::user()->id);
                $path = json_decode($user->json_config, true);
                if ($request->action === "add") {
                    if (!array_key_exists("advanced", $path)) {
                        $path += ["advanced" => ["from" => ["is" => $request->data, "clicks" => 0]]];
                    } else {
                        array_push($path["advanced"]["from"], ["is" => $request->data, "clicks" => 0]);
                    }
                }if ($request->action === "setzero") {
                    for ($i = 0; $i < count($path["advanced"]["from"]); $i++) {
                        if ($path["advanced"]["from"][$i]["is"] === $request->data) {
                            $path["advanced"]["from"][$i]["clicks"] = 0;
                            break;
                        }
                    }
                }if ($request->action === "delete") {
                    for ($i = 0; $i < count($path["advanced"]["from"]); $i++) {
                        if ($path["advanced"]["from"][$i]["is"] === $request->data) {
                            unset($path["advanced"]["from"][$i]);
                            $path["advanced"]["from"] = array_values($path["advanced"]["from"]);
                            break;
                        }
                    }
                }

            }
            $user->update([
                "json_config" => json_encode($path)
            ]);

            // dd($path);
            return back()->with([
                'type' => 'success',
                'message' => 'Your changes has been modified!'
            ]);
        }
    }
}
