define([
    './directives/module',
    'barChart'
], function (directives) {
    function blueChart ($delegate) {
        var delegate = $delegate[0],
            link = delegate.link;

        delegate.compile = function(tElement, tAttrs) {
            tElement.prepend('<h2>This is a custom blue version of the barChart!</h2>');
            return function(scope, elem, attrs) {
                scope.config = {
                    'color': '#5454AC',
                    'height': 25
                };
                link.apply(this, arguments);
            };
        };

        return $delegate;
    }
    directives.register.decorator('barsChartDirective', blueChart);
});