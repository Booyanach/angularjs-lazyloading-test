define(['./module.js'], function(controller) {

    var ordersController = function ($scope, $routeParams, customersFactory, testService) {
        console.log(customersFactory);
        console.log(testService);
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

    controller.register
      .controller('ordersController', ordersController);

});