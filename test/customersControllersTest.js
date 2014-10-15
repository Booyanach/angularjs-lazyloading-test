define(['controllersModule'], function(module) {
    console.log('running customersController');
    describe('Unit: customersController', function() {

        beforeEach(module('app'));
        beforeEach(module('app.controllers'));

        var ctrl, scope;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.new();

            ctrl = $controller('customersController', {
                $scope: scope
            });
        }));

        test('should change $scope.sortBy from name:', function() {
            expect(scope.sortBy).toEqual('name');
            scope.doSort('id');
            expect(scope.sortBy).toEqual('id');
        });
    });
});