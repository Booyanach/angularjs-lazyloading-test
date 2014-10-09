define([
    'controllersModule',
    'customersFactory'
],function(controller) {
    var allordersController = function ($scope, customersFactory) {

        'use strict';

        $scope.orders = null;
        $scope.ordersTotal = 0.0;
        $scope.totalType = 'danger';

        function init() {
             customersFactory.getOrders()
                .success(function(orders) {
                    $scope.orders = orders;
                    getOrdersTotal();
                })
                .error(function(data, status, headers, config) {
                    //handle error
                });
        }

        function getOrdersTotal() {
            var total = 0;
            $scope.orders.forEach(function(order) {
                total += order.total;
            });
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
        }

        init();
    };

    allordersController.$inject = ['$scope', 'customersFactory'];

    controller.register
      .controller('allordersController', allordersController);

});