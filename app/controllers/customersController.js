define([
    'controllersModule',
    'customersFactory'
],function(controller) {
    var customersController = function ($log, $window, customersFactory) {
        'use strict';
        var cust = this;
        cust.sortBy = 'name';
        cust.reverse = false;
        cust.list = [];
        cust.appSettings = {
            title: 'Customers Application',
            version: '1.0'
        };
        function init() {
            customersFactory.getCustomers()
                .success(function(list) {
                    cust.list = list;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }
        init();
        cust.doSort = function(propName) {
            cust.sortBy = propName;
            cust.reverse = !cust.reverse;
        };
        cust.deleteCustomer = function(customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function(status) {
                    if (status) {
                        cust.list.forEach(function(customer) {
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
    customersController.$inject = ['$log', '$window', 'customersFactory'];
    controller.register
      .controller('customersController', customersController);
});