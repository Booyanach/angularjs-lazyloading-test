define([
    'servicesModule'
], function(services) {

    function d3LoaderService() {
        var salesDataToPlot=scope[attrs.chartData],
            padding = 20,
            pathClass = 'path',
            xScale, yScale, xAxisGen, yAxisGen, lineFun,

            d3 = $window.d3;
            svg = null;

            this.initElement = function(element) {
                var rawSvg = elem.find('svg')[0];

                svg = d3.select(element);
            };

            this.plotChart = function() {

            };
    }

    services.register.service('d3LoaderService', d3LoaderService);
});