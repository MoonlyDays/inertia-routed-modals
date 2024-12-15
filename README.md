# Routed modals for Inertia

[![Latest Version on Packagist](https://img.shields.io/packagist/v/moonlydays/inertia-routed-modals.svg?style=flat-square)](https://packagist.org/packages/moonlydays/inertia-routed-modals)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/moonlydays/inertia-routed-modals/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/moonlydays/inertia-routed-modals/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/moonlydays/inertia-routed-modals/fix-php-code-style-issues.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/moonlydays/inertia-routed-modals/actions?query=workflow%3A"Fix+PHP+code+style+issues"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/moonlydays/inertia-routed-modals.svg?style=flat-square)](https://packagist.org/packages/moonlydays/inertia-routed-modals)

This is where your description should go. Limit it to a paragraph or two. Consider adding a small example.

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/inertia-routed-modals.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/inertia-routed-modals)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can
support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using.
You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards
on [our virtual postcard wall](https://spatie.be/open-source/postcards).

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


Inside your `app.tsx` wrap the App component with RoutedModalsProvider component.

```js
createInertiaApp({
    // ...
    setup({ el, App, props }) {
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

## Usage

Return the modal from the controller as you would normally return an Inertia page.

```php
public function action()
{
    return Inertia::modal("Component", [
        "prop" => "value",
        "other" => "value"
    ]);
}
```

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
