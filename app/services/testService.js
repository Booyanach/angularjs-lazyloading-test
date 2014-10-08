define(['./module'], function(services) {
    var testService = function($http) {
        return {};
    };

    testService.$inject = ['$http'];
    services.service('testService', testService);
});