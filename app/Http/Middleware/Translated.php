<?php

namespace App\Http\Middleware;

use App\Helpers\Client;
use Closure;
use Illuminate\Http\Request;

class Translated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $client = new Client;
        if(!$client->has()){
            $client->set();
        }
        return $next($request);
    }
}
