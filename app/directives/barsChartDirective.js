define([
    './directives/module',
    './directives/templates/barChart',
    './directives/chartDirective',
    'd3'
], function (directives, template, parent, d3) {

    function barsChart ($parse) {

        var barLink = function (scope, elem, attrs) {

            // load up the Controller of the directive we want to extend
            var chartCtrl = elem.find('chart').isolateScope().chart;

            console.log(chartCtrl);

            /**
             * callBack for scope.$watch
             * @param  {Array} value - value with the data
             */
            var dataWatch = function (value) {
                if (value) {
                    var data = scope.data,
                        width = '100%',
                        barHeight = 35,
                        chart = chartCtrl.create({
                        width: width,
                        height: barHeight,
                        data: data,
                        class: '.barChart'
                    });

                    bar = chart.selectAll('g')
                        .data(data)
                        .enter().append('g')
                        .attr('transform', function(d, i) { return 'translate(0,' + i * barHeight + ')'; });

                    bar.append('rect')
                        .attr('width', function(d) { return d + '%'; })
                        .transition().ease('elastic')
                        .attr('height', barHeight - 1)
                        .attr('style', function(d) {
                            return 'fill:#' + chartCtrl.color(d) + chartCtrl.color(d) + chartCtrl.color(d);
                        });

                    bar.append('text')
                        .attr('x', '0.2%')
                        .attr('y', barHeight / 2)
                        .attr('dy', '.35em')
                        .attr('style', function(d) {
                            return 'fill:white';
                        })
                        .text(function(d) { return d; });
                }

                angular.element('loader').remove();
            };

            elem.find('div.directive-text').text(template);

            // Since scope.data is only returned after the ajax call is successful, we need to watch
            // it's value and only draw the chart when this data has been retrieved
            scope.$watch('data', dataWatch);
        };

        return {
            restrict: 'E',
            require: [
            '?chart'
            ],
            template: template,
            scope: {data: '=chartData', parentModule: '=parentModule'},
            link: barLink,
            // controllerAs: 'barChart'
        };
    }
    directives.register.directive('barsChart', barsChart);
});