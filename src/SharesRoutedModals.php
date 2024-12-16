<?php

namespace MoonlyDays\InertiaRoutedModals;

trait SharesRoutedModals
{
    public function shareModal(): array
    {
        $session = request()->session();
        if ($session->has(Modal::SESSION_KEY)) {
            return ['modal' => fn () => $session->get(Modal::SESSION_KEY)];
        }

        return [];
    }
}
