import { Greeter } from "./Greeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";
import { LoudGreeter } from "./LoudGreeter";
import { HtmlGreeter } from "./HtmlGreeter";

const parentClass = new Greeter("Hello");
console.log(parentClass.greet("John"));

const child1 = new JavaScriptGreeter("Bonjour");
child1.greet("Ezio");

const child2 = new LoudGreeter("Salam Alikum");
console.log(child2.greet("Usman"));

const child3 = new HtmlGreeter("Namaste",'p');
console.log(child3.greet("Rahul"));

