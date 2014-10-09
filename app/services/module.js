define([
    'angular'
], function(ng) {
    'use strict';

    var services = null;

    try {
        services = ng.module('app.services');
    } catch (e) {
        services = ng.module('app.services', []);

        services.config(function($compileProvider, $provide) {
            services.register = {
                service : $provide.service,
                factory : $provide.factory,
                provider : $compileProvider.provider
            };
        });
    }
    return services;
});