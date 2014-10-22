define('customersControllersTest', [
    'angularMocks',
    'customersFactoryMock',
    'serviceModuleMock',
    'controllerModuleMock',
    'customersController'
], function(mocks, factoryMock) {
    var scope, ctrl;

    describe('Unit: controller Test', function() {

        // Initiate the modules
        beforeEach(function() {
            module('app.services');
            module('app.controllers');
        });

        // Inject the Angular dependencies that the controller requires to be invoked
        beforeEach(inject(function($controller, $log, $window) {
            ctrl = $controller('customersController', {
                '$log': $log,
                '$window': $window,
                'customersFactory': factoryMock
            });
        }));

        // Since we're using the controllerAs approach we need to test relativelly
        // to the controller instead of the $scope
        it("should change the controller's sortBy from name:", function() {
            expect(ctrl.sortBy).toEqual('name');
            ctrl.doSort('id');
            expect(ctrl.sortBy).toEqual('id');
        });
    });
});