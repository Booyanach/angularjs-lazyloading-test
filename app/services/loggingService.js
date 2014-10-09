define([
    'servicesModule'
], function(controller) {
    var loggingService = function($log, $window) {
        var error = function(message, data) {
            callerFn(message, '/logger', data, 'error');
        },
            debug = function(message, data) {
            callerFn(message, '/logger',data , 'debug');
        },
            callerFn = function(message, target, data, type) {
            $.post(target, {
                url: $window.location.href,
                data: data,
                message: message,
                type: type
            });
        },
            returnObj = {
            error: error,
            debug: debug
        };

        return (returnObj);
    };

    loggingService.$inject = ['$log', '$window'];

    controller.register.factory('loggingService', loggingService);

});