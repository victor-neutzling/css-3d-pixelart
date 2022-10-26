import IPixel from "./IPixel";

export default interface IBoard{
    id: number;
    pixels: IPixel[][];
    selected: boolean;
}