"use strict";
exports.__esModule = true;
var Greeter_1 = require("./Greeter");
var JavaScriptGreeter_1 = require("./JavaScriptGreeter");
var LoudGreeter_1 = require("./LoudGreeter");
var HtmlGreeter_1 = require("./HtmlGreeter");
var parentClass = new Greeter_1.Greeter("Hello");
console.log(parentClass.greet("John"));
var child1 = new JavaScriptGreeter_1.JavaScriptGreeter("Bonjour");
child1.greet("Ezio");
var child2 = new LoudGreeter_1.LoudGreeter("Salam Alikum");
console.log(child2.greet("Usman"));
var child3 = new HtmlGreeter_1.HtmlGreeter("Namaste", 'p');
console.log(child3.greet("Rahul"));
