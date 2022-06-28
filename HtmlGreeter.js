"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.HtmlGreeter = void 0;
var Greeter_1 = require("./Greeter");
var HtmlGreeter = /** @class */ (function (_super) {
    __extends(HtmlGreeter, _super);
    function HtmlGreeter(greeting, tagName) {
        if (tagName === void 0) { tagName = "h1"; }
        var _this = _super.call(this, greeting) || this;
        _this.tagName = tagName;
        return _this;
    }
    HtmlGreeter.prototype.greet = function (name) {
        return "<".concat(this.tagName, ">").concat(this.greeting, ", ").concat(name, "!</").concat(this.tagName, ">");
    };
    return HtmlGreeter;
}(Greeter_1.Greeter));
exports.HtmlGreeter = HtmlGreeter;
