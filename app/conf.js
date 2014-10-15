 require.config({
 // alias libraries paths
    baseUrl: 'app',
    paths: {
        'd3': '../scripts/d3',
        'jquery': '../scripts/jquery',
        'angular': '../scripts/angular',
        'domReady': '../scripts/domReady',
        'stacktrace': '../scripts/stacktrace',
        'angularRoute': '../scripts/angular-route',
        'angularAnimate': '../scripts/angular-animate',

        // Modules
        'servicesModule': './services/module',
        'directivesModule': './directives/module',
        'controllersModule': './controllers/module',

        // Controllers

        // Directives
        'barChart': './directives/barsChartDirective',
        'blueBarChart': './directives/blueBarsChartDirective',

        // Services
        'testService': './services/testService',
        'routeResolver': './services/routeResolver',
        'customersFactory': './services/customersFactory',

        // Tests
        'test/customers': './test/customersControllerTest'
    },
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularRoute': ['angular'],
        'angularAnimate': ['angular']
    },
    // Attach the application
    deps: ['./bootstrap']
});