# Routed modals for Inertia

[![Latest Version on Packagist](https://img.shields.io/packagist/v/moonlydays/inertia-routed-modals.svg?style=flat-square)](https://packagist.org/packages/moonlydays/inertia-routed-modals)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/moonlydays/inertia-routed-modals/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/moonlydays/inertia-routed-modals/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/moonlydays/inertia-routed-modals/fix-php-code-style-issues.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/moonlydays/inertia-routed-modals/actions?query=workflow%3A"Fix+PHP+code+style+issues"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/moonlydays/inertia-routed-modals.svg?style=flat-square)](https://packagist.org/packages/moonlydays/inertia-routed-modals)

> [!NOTE]
> This package supports React only.

## Installation

You can install the package via composer:

```bash
composer require moonlydays/inertia-routed-modals
```

Install the npm package using:

```bash
npm install vendor/moonlydays/inertia-routed-modals/node/react
```

## Usage

### Backend

It all starts with a route. Inside your controller create an action that will return the modal using the new
`Inertia::modal` method. The first argument is the modal component name (relative to Modals folder). The
second optional argument is an array of props that have to be passed to the modal.

```php
public function action()
{
    return Inertia::modal("Component", [
        "prop" => "value",
        "other" => "value"
    ]);
}
```

### Frontend

Inside your `app.tsx` wrap the App component with RoutedModalsProvider component. Use may the same function
`resolvePageComponent` that use
used to resolve Inertia pages to resolve modal components.

```jsx
import {RoutedModalsProvider} from "./RoutedModalsProvider";

createInertiaApp({
    // ...
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <RoutedModalsProvider
                resolve={(name) =>
                    resolvePageComponent(
                        `./Modals/${name}.tsx`,
                        import.meta.glob('./Modals/**/*.tsx'),
                    )
                }
            >
                <App {...props} />
            </RoutedModalsProvider>,
        );
    }
})
```

Next you have to specify where the Modal components will be mounted in your layout. Use `<ModalPortal />` somewhere
in the root of your page layout to set that.

```jsx
import {ModalPortal} from "./ModalPortal";

export function MainLayout({children}) {

    return (
        <div className="bg-black">
            {children}
            <ModalPortal/>
        </div>
    );

}
```

Create a new `resources/js/Modals` folder and create a new modal component the same way you create Inertia
pages. The modal components are headless, meaning they are mounted to the DOM without any overhead elements. This is an
example MyModal component:

```jsx
// resources/js/Modals/MyModal.tsx
export default function MyModal() {
    return (
        <div className="absolute w-full h-full bg-black/50 z-50 flex items-center justify-center">
            <div>This is a cool looking Modal!</div>
        </div>
    );
}
```

Now to open that modal, create a `<Link ... />` somewhere in your app that leads to your route that returns a modal.
When that Link will be clicked your modal will be opened.

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Daniel Basiuc-Brinzei](https://github.com/MoonlyDays)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
