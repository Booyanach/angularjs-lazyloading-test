define(['./module.js'],function(controller) {
    var customersController = function ($scope, $log, $window, $location, customersFactory, appSettings) {

        'use strict';

        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        $scope.deleteCustomer = function(customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function(status) {
                    if (status) {
                        $scope.customers.forEach(function(customer) {
                            if (customer.id === customerId) {
                               customer.splice(i,1);
                               return;
                            }
                        });
                    }
                    else {
                        $window.alert('Unable to delete customer');
                    }

                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        };
    };

    customersController.$inject = ['$scope', '$log', '$window', '$location',
    'customersFactory', 'appSettings'];

    controller.register
      .controller('customersController', customersController);

});