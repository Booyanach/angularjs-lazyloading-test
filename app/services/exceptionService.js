define([
    'servicesModule',
    'stacktrace'
], function(services, trace) {
    'use strict';
    var exceptionFactory = function($log, $window) {
        function error(exception, cause) {
            $log.error.apply($log, arguments);
            try {
                var errorMessage = exception.toString(),
                    stackTrace = trace({e: exception});
                $.post('/logger', {
                    url: $window.location.href,
                    message: errorMessage,
                    stackTrace: stackTrace,
                    type: "exception"
                });

            } catch (e) {

            }
        }
        return (error);
    };

    exceptionFactory.$inject = ['$log', '$window'];
    services.register.factory('exceptionFactory', exceptionFactory);
    services.register.provider('$exceptionHandler', {
        $get: function(exceptionFactory) {
            return (exceptionFactory);
        }
    });
});