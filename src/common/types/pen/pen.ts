export class Pen{
    private static color: string = "black"

    public static getColor(){
        return this.color
    }
    public static setColor(color:string){
        this.color = color
    }
}