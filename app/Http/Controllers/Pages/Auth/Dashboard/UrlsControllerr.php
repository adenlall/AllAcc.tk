<?php

namespace App\Http\Controllers\Pages\Auth\Dashboard;

use App\Http\Controllers\Controller;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UrlsControllerr extends Controller
{
    //
    function __invoke(Request $request)
    {
        $user = User::find(Auth::user()->id);
        $path = json_decode($user->json_config, true);

        if ($request->to === 'hun') {
            $path['urls'] = json_decode($request->data, true);
        }
        if ($request->to === 'dellink') {
            for ($i = 0; $i < count($path['urls']); $i++) {
                if ($path['urls'][$i]['id'] === $request->data) {
                    unset($path['urls'][$i]);
                    $path['urls'] = array_values($path['urls']);
                }
            }
        }
        if ($request->to === 'grp' && count($path['config']['urlsGrps']) <= 8) {
            $path['config']['urlsGrps'][] = [$request->data];
        }
        if ($request->to === 'delgrp') {
            for ($i = 0; $i < count($path['urls']); $i++) {
                if ($path['urls'][$i]['grp'] === $request->data) {
                    $path['urls'][$i]['grp'] = null;
                }
            }
            for ($i = 0; $i < count($path['config']['urlsGrps']); $i++) {
                if ($path['config']['urlsGrps'][$i] === $request->data) {
                    unset($path['config']['urlsGrps'][$i]);
                    $path['config']['urlsGrps'] = array_values($path['config']['urlsGrps']);
                    break;
                }
            }
        }
        if ($request->to === "default" && count($path['urls']) <= 15) {
            $val = $request->validate([
                'name' => ['required'],
                'link' => ['required'],
            ]);
            $url = $request->link;
            $url = strpos($url, 'http') !== 0 ? "http://$url" : $url;

            if (filter_var($url, FILTER_VALIDATE_URL) && $val) {
                if (count($path['urls']) === 0) {
                    $num = -1;
                } else {
                    $arr = $path['urls'];
                    function cmp($a, $b)
                    {
                        if ($a['id'] == $b['id']) {
                            return 0;
                        }
                        return ($a['id'] < $b['id']) ? -1 : 1;
                    }
                    usort($arr, function ($a, $b) {
                        if ($a['id'] == $b['id']) {
                            return 0;
                        }
                        return ($a['id'] < $b['id']) ? -1 : 1;
                    });
                    // dd($arr);
                    $num = ($arr[count($arr) - 1]['id']);
                };
                array_push($path['urls'], ['name' => $request->name, 'link' => $request->link, 'grp' => null, 'id' => ($num + 1)]);
            }
        }

        $user->update([
            'json_config' => json_encode($path),
        ]);

        return back()->with([
            'type' => 'success',
            'message' => "done!"
        ]);
    }
}
