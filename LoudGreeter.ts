import { Greeter } from "./Greeter";

export class LoudGreeter extends Greeter {
    private extra:string = "World";
    addVolume():void {
        this.extra = this.extra+"!"
        console.log(this.extra+"!")
    }
    greet(name: string) {
        return `${this.greeting}, ${name}!!!`
    }
}