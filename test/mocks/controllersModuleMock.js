/**
 * Mock for loading the controllers Module
 * This is necessary since jasmine doesn't really run the .config of a module
 * so we can't exactly append providers to the public object of the module
 * @return {module} - controllers - the controllers module
 */
define('controllerModuleMock', [], function() {
    // Override the controllersModule so we can use it
    define('controllersModule', ['angular'], function(ng) {
        'use strict';
        var controllers = ng.module('app.controllers', []);
        controllers.register = {
            controller: controllers.controller
        };
        return controllers;
    });
});