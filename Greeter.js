"use strict";
exports.__esModule = true;
exports.Greeter = void 0;
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    Greeter.prototype.greet = function (name) {
        return "".concat(this.greeting, ", ").concat(name, "!");
    };
    return Greeter;
}());
exports.Greeter = Greeter;
// const obj = new Greeter('Hello');
// console.log( obj.greet("shayan"))
