define(['./module', 'stacktrace'], function(services, trace) {
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
    services.factory('exceptionFactory', exceptionFactory);
    services.provider('$exceptionHandler', {
        $get: function(exceptionFactory) {
            return (exceptionFactory);
        }
    });
});