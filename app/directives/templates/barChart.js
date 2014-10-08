define(['./templateTools'], function(tools) {
    return (new function() {
        this.template = [
        '<svg class="barChart" width="100%" height="200"></svg>',
        '<chart chart-data="test.salesData"></chart>'
        ];

        this.getHTML = function() {
            return tools.getHTML(this.template);
        };

        this.showCode = function() {
            this.template.push('<div class="divider">Template</div>',
            '<textarea class="directive-text"></textarea>');
        };

        this.getText = function() {
            return tools.getText(this.template);
        };
    }());
});