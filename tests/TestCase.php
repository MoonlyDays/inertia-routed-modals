<?php

namespace MoonlyDays\InertiaRoutedModals\Tests;

use Illuminate\Database\Eloquent\Factories\Factory;
use MoonlyDays\InertiaRoutedModals\InertiaRoutedModalsServiceProvider;
use Orchestra\Testbench\TestCase as Orchestra;

class TestCase extends Orchestra
{
    protected function setUp(): void
    {
        parent::setUp();

        Factory::guessFactoryNamesUsing(
            fn (string $modelName) => 'MoonlyDays\\InertiaRoutedModals\\Database\\Factories\\'.class_basename($modelName).'Factory'
        );
    }

    protected function getPackageProviders($app)
    {
        return [
            InertiaRoutedModalsServiceProvider::class,
        ];
    }

    public function getEnvironmentSetUp($app)
    {
        config()->set('database.default', 'testing');

        /*
        $migration = include __DIR__.'/../database/migrations/create_inertia-routed-modals_table.php.stub';
        $migration->up();
        */
    }
}
