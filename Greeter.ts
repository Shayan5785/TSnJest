export class Greeter {
    greeting: string;
    constructor(g: string) {
        this.greeting = g;
    }

    greet(name: string) {
        return `${this.greeting}, ${name}!`
    }
}

// const obj = new Greeter('Hello');
// console.log( obj.greet("shayan"))