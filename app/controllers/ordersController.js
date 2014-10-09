define([
    'controllersModule',
    'customersFactory',
    'testService'
], function(controllers) {

    var ordersController = function ($scope, $routeParams, customersFactory, testService) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;

        function init() {
             customersFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    //handle error
                });
        }

        init();
    };
    // Always remember to inject!
    ordersController.$inject = ['$scope', '$routeParams', 'customersFactory', 'testService'];

    controllers.register
      .controller('ordersController', ordersController);

});