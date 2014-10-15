define(['angular'], function(angular) {
    console.log('running customersController');
    describe('Unit: customersController', function() {

        beforeEach(angular('app'));
        beforeEach(angular('app.controllers'));

        var ctrl, scope;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.new();

            ctrl = $controller('customersController', {
                $scope: scope
            });
        }));

        it('should change $scope.sortBy from name:', function() {
            expect(scope.sortBy).toEqual('name');
            scope.doSort('id');
            expect(scope.sortBy).toEqual('id');
        });
    });
});