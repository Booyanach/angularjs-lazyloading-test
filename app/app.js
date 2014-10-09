define([
    'angular',
    'services/module',
    'controllers/module',
    'directives/module',
    'services/routeResolver'
    ],function(ng) {
        'use strict';

        return ng.module('app',[
            'ngRoute',
            'app.services',
            'app.controllers',
            'app.directives'
        ]);
});