define('customersFactoryTest',[
    'customersFactory',
], function(factory) {
    describe('Unit: test', function() {
        var srvc, httpBackend, idMock, ordersMock, http;

        // Module dependencies
        beforeEach(function() {
            module('app.services');

            inject(function($httpBackend, $http) {
                httpBackend = $httpBackend;
                http = $http;
            });

            idMock = {
                id: 1,
                joined: '2000-12-02',
                name:'John',
                city:'Chandler',
                orderTotal: 9.9956,
                orders: [{
                    id: 1,
                    product: 'Shoes',
                    total: 9.9956
            }]};
            ordersMock = [{
                    id: 1,
                    product: 'Shoes',
                    total: 9.9956
            }];
        });

       it('test this', function() {
            var responseArr = [];
            responseArr.push(idMock);

            expect(true).toBe(true);

            httpBackend.whenGET('/customers').respond(responseArr);
            httpBackend.whenGET('/customers/1').respond(idMock);
            httpBackend.whenGET('/orders').respond(ordersMock);
        });
    });
});