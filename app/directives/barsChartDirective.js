define([
    './directives/module',
    './directives/templates/barChart',
    './directives/chartDirective',
    './directives/svDirectiveTools'
], function (directives, template, parent, sv) {

    function barsChart ($parse) {

        if (sv.debug) {
            template.showCode();
        }

        var barLink = function (scope, elem, attrs) {
            var config = angular.fromJson(scope.config);
            // load up the Controller of the directive we want to extend
            var chartCtrl = elem.find('chart').isolateScope().chart;
            /**
             * callBack for scope.$watch
             * @param  {Array} value - value with the data
             */
            var dataWatch = function (value) {
                if (value) {
                    var data = scope.data,
                        width = config && config.width ? config.width : '100%',
                        barHeight = config && config.height ? config.height : 15,
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
                            if (config && config.color) {
                                return 'fill:' + config.color;
                            } else {
                                return 'fill:#' + chartCtrl.color(d) + chartCtrl.color(d) + chartCtrl.color(d);
                            }
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

            elem.find('textarea.directive-text').val(template.getText());

            // Since scope.data is only returned after the ajax call is successful, we need to watch
            // it's value and only draw the chart when this data has been retrieved
            scope.$watch('data', dataWatch);
        };

        return sv.extend({
            require: [
            '?chart'
            ],
            template: template.getHTML(),
            scope: {data: '=chartData'},
            link: barLink
        });
    }
    directives.register.directive('barsChart', barsChart);
});