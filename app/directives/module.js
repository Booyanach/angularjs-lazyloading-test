define([
    'angular'
], function(ng) {

    var module = null;

    try {
        module = ng.module('app.directives');
    } catch (e) {
        module = ng.module('app.directives', []);

        module.config(function($compileProvider, $provide) {
            module.register = {
                directive : $compileProvider.directive,
                decorator : $provide.decorator
            };
        });
    }

    return module;
});