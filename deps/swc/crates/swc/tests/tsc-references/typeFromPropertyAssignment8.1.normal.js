//// [a.js]
var my = my || {};
my.app = my.app || {};
my.app.Application = function() {
    var Application = function() {
    //...
    };
    return Application;
}();
my.app.Application();
//// [b.js]
var min = window.min || {};
min.app = min.app || {};
min.app.Application = function() {
    var Application = function() {
    //...
    };
    return Application;
}();
min.app.Application();
