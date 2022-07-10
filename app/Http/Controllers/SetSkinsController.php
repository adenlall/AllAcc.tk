<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Rules\Skins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SetSkinsController extends Controller
{
    //
    function __invoke(Request $request)
    {

        // dd('skin ' . $request->skin, 'icons ' . $request->icons);

        $validated = $request->validate([
            'skin'  => ["required", new Skins],
            'icons' => ["required", new Skins],
        ]);


        if($validated){
            // dd('validated', $request->icons, $request->skin );
            $arr = ['theme'=>['skin'=>$request->skin, 'icons'=>$request->icons, 'besthex'=>$request->hex]];
            $tomerge = ["visible"=>1, "pure"=>false];
            $new_arr    = array_merge($arr, $tomerge);

            $user = User::find(Auth()->user()->id);
            $user->update([
                'json_config' => json_encode($new_arr),
            ]);
            $user->save();

            return redirect('setting')->with([
                'type' => 'success',
                'message' => 'Your changes has been modified!'
            ]);
            // dd('done', $request->skin, $request->icons, $new_arr);
        }


    }
}
