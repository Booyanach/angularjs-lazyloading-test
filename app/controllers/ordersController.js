define(['./module.js'], function(controller) {

    var ordersController = function ($scope, $routeParams, customersFactory) {
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

    ordersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    controller.register
      .controller('ordersController', ordersController);

});