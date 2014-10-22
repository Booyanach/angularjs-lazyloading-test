var testPaths = {
    // Controllers
    'customersControllersTest': '../test/controllers/customersControllersTest',
    // Services
    'customersFactoryTest': '../test/services/customersFactoryTest',
    // Directives
    'barsChartDirectiveTest': '../test/directives/barsChartDirectiveTest',
},  tests = Object.keys(window.__karma__.files).filter(function(file) {
    return (/(spec|Test)\.js$/i.test(file));
}).map(function(test) {
    var returnVal = false;
    Object.keys(testPaths).map(function(path){
        if (testPaths[path] === test.replace('/base', '..').replace('.js', '')) {
            returnVal = path;
        }
    });
    return returnVal;
}),
    paths = {
    'jquery': '../scripts/jquery',
    'angular': '../scripts/angular',
    'angularMocks': '../scripts/angular-mocks',

    // Modules
    'servicesModule': './services/module',
    'directivesModule': './directives/module',
    'controllersModule': './controllers/module',

    // Controllers
    'testController': './controllers/testController',
    'ordersController': './controllers/ordersController',
    'allordersController': './controllers/allordersController',
    'customersController': './controllers/customersController',

    // Directives
    'barChart': './directives/barsChartDirective',
    'blueBarChart': './directives/blueBarsChartDirective',

    // Services
    'testService': './services/testService',
    'routeResolver': './services/routeResolver',
    'customersFactory': './services/customersFactory',

    // Mocks
    'serviceModuleMock': '../test/mocks/servicesModuleMock',
    'controllerModuleMock': '../test/mocks/controllersModuleMock',
    'customersFactoryMock': '../test/mocks/customersFactoryMock',
};

// We're extending the paths object with the elements in testPaths
Object.keys(testPaths).forEach(function(key) {
    paths[key] = testPaths[key];
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/app',
    paths: paths,
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularRoute': ['angular'],
        'angularAnimate': ['angular'],
        'angularMocks': ['angular']
    },
    // dynamically load all test files
    deps: tests,
    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});

console.log(tests);