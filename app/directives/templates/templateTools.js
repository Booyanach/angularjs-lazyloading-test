define([], function() {
   this.getHTML = function(template) {
        return template.join('');
    };

    this.getText = function(template) {
        return template.join('\r\n');
    };
    return this;
});