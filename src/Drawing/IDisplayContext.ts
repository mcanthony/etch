module etch.drawing{
    export interface IDisplayContext {
        Ctx: CanvasRenderingContext2D;
        Width: number;
        Height: number;
        IsCached: boolean;
    }
}