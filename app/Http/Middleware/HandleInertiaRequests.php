<?php

namespace App\Http\Middleware;

use App\Helpers\Routhelper;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\File;
use Inertia\Middleware;
use Jenssegers\Agent\Facades\Agent;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'master';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'is_admin' => fn () => $request->session()->has('admin_token')
                ? (Admin::where('token', Crypt::decrypt($request->session()->get('admin_token')))->exists() ?
                    [
                        "is"    => true,
                        "name"  => Admin::where('token', Crypt::decrypt($request->session()->get('admin_token')))->get()->first()->username,
                    ]
                    :
                    [
                        "is"    => false,
                        "name"  => null,
                    ]
                )
                :
                [
                    "is"    => false,
                    "name"  => null,
                ],
            'flash' => [
                'type' => $request->session()->get('type'),
                'message' => $request->session()->get('message'),
            ],
            'lang' => fn () => $request->path() === '/' ?
                ($request->cookie('lang') !== null ?
                    (File::exists(resource_path("lang/{$request->cookie('lang')}/" . str_replace('/', '_', $request->path() . ".json")))
                        ?
                        (json_decode(File::get(resource_path("lang/{$request->cookie('lang')}/" . str_replace('/', '_', $request->path()) . ".json")), true)
                        )
                        : (json_decode(File::get(resource_path("lang/en/" . str_replace('/', '_', $request->path()) . ".json")), true)
                        )
                    )
                    : (File::exists(resource_path("lang/" . Agent::languages()[0] . "/" . str_replace('/', '_', $request->path() . ".json")))
                        ?
                        (json_decode(File::get(resource_path("lang/" . Agent::languages()[0] . "/" . str_replace('/', '_', $request->path()) . ".json")), true)
                        )
                        : (File::exists(resource_path("lang/" . Agent::languages()[1] . "/" . str_replace('/', '_', $request->path() . ".json")))
                            ?
                            (json_decode(File::get(resource_path("lang/" . Agent::languages()[1] . "/" . str_replace('/', '_', $request->path()) . ".json")), true)
                            )
                            : (json_decode(File::get(resource_path("lang/en/" . str_replace('/', '_', $request->path()) . ".json")), true)
                            )
                        )
                    )
                )
                : 'not supported translated route - Lang::en',
            'ibd' => fn () => (Routhelper::IsGuest($request))? (
                    $request->cookie('lang') !== null ?
                    (
                        File::exists(resource_path("lang/{$request->cookie('lang')}/index.json"))
                        ?
                        (
                            json_decode(File::get(resource_path("lang/{$request->cookie('lang')}/index.json")), true)
                        )
                        :
                        (
                            json_decode(File::get(resource_path("lang/en/index.json")), true)
                        )
                    )
                    :
                    (
                        File::exists(resource_path("lang/" . Agent::languages()[0] . "/index.json"))
                        ?
                        (
                            json_decode(File::get(resource_path("lang/" . Agent::languages()[0] . "/index.json")), true)
                        )
                        :
                        (
                            File::exists(resource_path("lang/" . Agent::languages()[1] . "/index.json"))
                            ?
                            (json_decode(File::get(resource_path("lang/" . Agent::languages()[1] . "/index.json")), true)
                            )
                            : (json_decode(File::get(resource_path("lang/en/index.json")), true)
                            )
                        )
                    )
                )
                : 'not supported translated route - Lang:en',
                '__lang__' => $request->cookie('lang') ? $request->cookie('lang') : 'english'
        ]);
    }
}
