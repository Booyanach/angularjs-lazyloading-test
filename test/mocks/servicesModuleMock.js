/**
 * Mock for loading the services Module
 * This is necessary since jasmine doesn't really run the .config of a module
 * so we can't exactly append providers to the public object of the module
 * @return {module} - services - the services module
 */
define('serviceModuleMock', [], function() {
    // Override the servicesModule so we can use it
    define('servicesModule', ['angular'], function(ng) {
        'use strict';
        var services = ng.module('app.services', []);
        services.register = {
            factory: function() {
                return services.factory(arguments);
            },
            service: function() {
                return services.service(arguments);
            }
        };
        return services;
    });
});
