var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    sprintf=require('sprintf').sprintf,
    fs=require('fs');

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname, '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           data = customers[i];
           break;
        }
    }
    res.json(data);
});

app.post('/logger', function(req, res) {
    res.json({ok: true});

    if(req.body.type === 'debug') {
        console.log('debug::', req.body.message, JSON.stringify(req.body.data));
    } else if(req.body.type === 'error') {
        console.log('error::', req.body.message, JSON.stringify(req.body.data));
    } else if(req.body.type === 'exception') {
        console.log('::  exception:Message   ::', req.body.message);
        console.log('::  exception:URL       ::', req.body.url);
        console.log('::  exception:Trace     ::');
        Object.keys(req.body.stackTrace).forEach(function(key) {
            console.log('::', sprintf('%s',req.body.stackTrace[key]));
        });
    }
});

app.get('/customers', function(req, res) {
    res.json(customers);
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);
            }
        }
    }
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           data = { status: true };
           break;
        }
    }
    res.json(data);
});

app.get('/d3req', function(req, res) {
    res.json(d3Arr);
});
app.listen(8080);

console.log('Express listening on port 8080');

        var customers = [
            {
                id: 1,
                joined: '2000-12-02',
                name:'John',
                city:'Chandler',
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956
                    }
                ]
            },
            {
                id: 2,
                joined: '1965-01-25',
                name:'Zed',
                city:'Las Vegas',
                orderTotal: 19.99,
                orders: [
                    {
                        id: 2,
                        product: 'Baseball',
                        total: 9.995
                    },
                    {
                        id: 3,
                        product: 'Bat',
                        total: 9.995
                    }
                ]
            },
            {
                id: 3,
                joined: '1944-06-15',
                name:'Tina',
                city:'New York',
                orderTotal:44.99,
                orders: [
                    {
                        id: 4,
                        product: 'Headphones',
                        total: 44.99
                    }
                ]
            },
            {
                id: 4,
                joined: '1995-03-28',
                name:'Dave',
                city:'Seattle',
                orderTotal:101.50,
                orders: [
                    {
                        id: 5,
                        product: 'Kindle',
                        total: 101.50
                    }
                ]
            }
        ],

            d3Arr = [
                10,
                20,
                30,
                40,
                50,
                60,
                70,
                80,
                90,
                90,
                80,
                70,
                60,
                50,
                40,
                30,
                20,
                10
            ];