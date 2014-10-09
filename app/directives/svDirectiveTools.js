define([
    'directivesModule'
], function(directives) {

    var tools = function() {
        var sv = this;

        sv.debug = true;

        sv.restrict = 'EAC';
        sv.template = '';
    };

    tools.prototype.extend = function() {
        var sv = this;
        angular.forEach(arguments, function(argument) {
            angular.extend(sv, argument);
        });
        return sv;
    };

    return new tools();
});