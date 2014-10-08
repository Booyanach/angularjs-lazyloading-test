 require.config({
 // alias libraries paths
    baseUrl: 'app',
    paths: {
        'd3': '../scripts/d3',
        'jquery': '../scripts/jquery',
        'angular': '../scripts/angular',
        'domReady': '../scripts/domReady',

        'barChart': './directives/barsChartDirective',
        'blueBarChart': './directives/blueBarsChartDirective',

        'stacktrace': '../scripts/stacktrace',
        'angularRoute': '../scripts/angular-route',
        'angularAnimate': '../scripts/angular-animate'
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