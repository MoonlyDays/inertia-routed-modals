<?php

namespace MoonlyDays\InertiaRoutedModals;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Middleware
{
    public function handle(Request $request, Closure $next)
    {
        $session = $request->session();
        if ($session->has(Modal::SESSION_KEY)) {
            Inertia::share('modal', $session->pull(Modal::SESSION_KEY));
        }

        return $next($request);
    }
}
