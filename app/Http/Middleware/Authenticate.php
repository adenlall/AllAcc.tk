<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Client\Request;

class Authenticate
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function handle(Request $request, Closure $next)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
        return $next($request);
    }
}
