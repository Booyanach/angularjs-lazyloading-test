/**
 * Mocks the behavior of a call to customersFactory
 * @return {Object} - customersFactoryMock - A mock of the object that
 * would be returned by customersFactory
 */
define('customersFactoryMock', [], function() {
    return {
        // The getCustomers function returns an object that imitates a promise
        getCustomers: function(){
            return {
                // Success function, receives a callback and returns an array with
                // Objects that represent a customer
                success: function(cb) {
                    cb([{
                        id: 1,
                        joined: '2000-12-02',
                        name:'John',
                        city:'Chandler',
                        orderTotal: 9.9956,
                        orders: [{
                            id: 1,
                            product: 'Shoes',
                            total: 9.9956
                    }]}]);
                    return this;
                },
                // Error function, receives a callback that returns data, status, headers, config
                // We're just returning strings
                error: function(cb) {
                    cb('a', 'b', 'c', 'd');
                    return this;
                }
            };
        }
    };
});