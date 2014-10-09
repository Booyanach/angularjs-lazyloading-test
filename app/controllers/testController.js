define([
    'controllersModule',
    'blueBarChart'
], function(controller, chart) {

    function testController($scope, $http) {

        var test = this;

        test.text = 'This page is meant to fail so we can test the $exceptionHandler override';

        $http.get('/d3req')
            .success(function(salesData) {
                test.salesData = salesData;
            })
            .error(function(data, status, headers, config) {
                $log.log(data.error + ' ' + status);
            });
    }

    controller.register
      .controller('testController', testController);

});