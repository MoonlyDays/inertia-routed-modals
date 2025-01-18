<?php

namespace MoonlyDays\InertiaRoutedModals;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\RedirectResponse;
use Inertia\ResponseFactory;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class InertiaRoutedModalsServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        $package->name('inertia-routed-modals');
    }

    public function bootingPackage(): void
    {
        ResponseFactory::macro(
            'modal',
            fn (string $component, array|Arrayable $props = []) => new Modal($component, $props)
        );

        RedirectResponse::macro(
            'persistModal',
            function () {
                /** @var $this RedirectResponse */
                $this->getSession()->flash(Modal::SESSION_KEY, [
                    'nonce' => request()->header(Modal::HEADER_NONCE),
                ]);

                return $this;
            }
        );
    }
}
