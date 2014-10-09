define([
    './app',
    'routeResolver'
    ], function(app, resolver) {
    'use strict';

    app.config(['$routeProvider', '$controllerProvider', '$provide', '$httpProvider', 'routeResolverProvider',
        function($routeProvider, $controllerProvider, $provide, $httpProvider, routeResolverProvider) {
        app.register = {
            controller: $controllerProvider.register,
            service: $provide.service,
            factory: $provide.factory
        };

        var route = routeResolverProvider.route;

        $routeProvider
            .when('/', route.resolve('customers'))
            .when('/test', route.resolve('test'))
            .when('/orders/:customerId', route.resolve('orders'))
            .when('/orders', route.resolve('allorders'))
            .otherwise({ redirectTo: '/' });
    }]);

});