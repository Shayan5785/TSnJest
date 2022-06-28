import { Greeter } from "./Greeter";

export class JavaScriptGreeter extends Greeter {
    greet(name:string):any {
        console.log(`${this.greeting}, ${name}!`);
    }
}
