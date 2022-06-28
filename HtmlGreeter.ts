import { Greeter } from "./Greeter";

export class HtmlGreeter extends Greeter {
    tagName: string;
    constructor(greeting: string, tagName:string = "h1"  ) {
        super(greeting);
        this.tagName = tagName;
    }
    greet(name: string): string {
        return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`
    }
}
