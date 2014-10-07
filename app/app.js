define([
    'angular',
    'services/index',
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