define([
    'angular'
], function(ng) {
    'use strict';

    var services = null;

    try {
        services = ng.module('app.services');
    } catch (e) {
        services = ng.module('app.services', []);
    }
    return services;
});