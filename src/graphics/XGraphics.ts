import XColor from "./XColor";

export default class XGraphics {
    private _canvas: CanvasRenderingContext2D;
    private _bgColor: XColor;

    constructor(canvas: CanvasRenderingContext2D) {
        this._canvas = canvas;
        this._bgColor = XColor.white;
    }

    setBackground(color: XColor) {
        this._bgColor = color;
    }

    //Properties
    get width(): number {
        return this.canvas.canvas.width;
    }
    get height(): number {
        return this.canvas.canvas.height;
    }
    get canvas(): CanvasRenderingContext2D {
        return this._canvas;
    }

    //Functions
    public clear() {
        this.clearArea(0, 0, this._canvas.canvas.width, this._canvas.canvas.height);
    }

    public clearArea(x: number, y: number, w: number, h: number) {
        this._canvas.fillStyle = this._bgColor.cssStyle;
        this._canvas.fillRect(x, y, w, h);
        this._canvas.fill();
    }

    public drawRound(x: number, y: number, radius: number, fillColor: XColor): void {
        this._canvas.fillStyle = fillColor.cssStyle;
        this._canvas.beginPath();
        this._canvas.arc(x, y, radius, 0, Math.PI * 2);
        this._canvas.fill();
    }

    public drawLine(x1: number, y1: number, x2: number, y2: number, strokeColor: XColor, strokeWidth: number) {
        this._canvas.strokeStyle = strokeColor.cssStyle;
        this._canvas.lineWidth = strokeWidth;
        this._canvas.beginPath();
        this._canvas.moveTo(x1, y1);
        this._canvas.lineTo(x2, y2);
        this._canvas.stroke();
    }
}