<?php

namespace App\Http\Middleware;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Inertia\Middleware;

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
            ]
        ]);
    }
}
