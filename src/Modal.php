<?php

namespace MoonlyDays\InertiaRoutedModals;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class Modal implements Arrayable, Responsable
{
    public const SESSION_KEY = '_modal';

    protected string $baseUrl = '/';

    public function __construct(
        protected string $component,
        protected array $props
    ) {}

    /**
     * Include props in the modal.
     */
    public function with(array|Arrayable $props): self
    {
        return tap($this, fn () => $this->props = ($props instanceof Arrayable) ? $props->toArray() : $props);
    }

    /**
     * Sets the base url for this modal.
     */
    public function baseUrl(string $baseUrl): self
    {
        return tap($this, fn () => $this->baseUrl = $baseUrl);
    }

    /**
     * Sets the base route for this modal.
     */
    public function baseRoute(string $route): self
    {
        return $this->baseUrl(route($route));
    }

    public function toResponse($request): Response
    {
        session()->flash(self::SESSION_KEY, $this->toArray());

        return back();
    }

    public function toArray(): array
    {
        return [
            'component' => $this->component,
            'props' => $this->props,
            'nonce' => Str::uuid()->toString(),
        ];
    }
}
