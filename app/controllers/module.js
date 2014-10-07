define([
    'angular'
], function(ng) {
    'use strict';

    var controllers = null;

    try {
        controllers = ng.module('app.controllers');
    } catch (e) {
        controllers = ng.module('app.controllers', []);

        controllers.config(['$controllerProvider', function($controllerProvider) {
            controllers.register = {
                controller: $controllerProvider.register
            };
        }]);
    }

    return controllers;
});