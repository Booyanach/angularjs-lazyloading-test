define([
    'angular'
], function(ng) {

    var module = null;

    try {
        module = ng.module('app.directives');
    } catch (e) {
        module = ng.module('app.directives', []);

        module.config(function($compileProvider) {
            module.register = {
                directive : $compileProvider.directive
            };
        });
    }

    return module;
});