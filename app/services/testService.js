define([
    'servicesModule'
], function(services) {
    var testService = function($http) {
        return {};
    };

    testService.$inject = ['$http'];
    services.register.service('testService', testService);
});