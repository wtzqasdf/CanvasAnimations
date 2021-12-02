import XColor from "../XColor";

export default class Line {
    private _originX: number;
    private _originY: number;
    private _x1: number;
    private _y1: number;
    private _x2: number;
    private _y2: number;
    private _speed: number;
    private _color: XColor;
    private _distance: number;
    private _angle: number;
    private _strokeWidth: number;

    constructor() {
        this._originX = 0;
        this._originY = 0;
        this._x1 = 0;
        this._x2 = 0;
        this._y1 = 0;
        this._y2 = 0;
        this._speed = 0;
        this._color = XColor.white;
        this._distance = 0;
        this._angle = 0;
        this._strokeWidth = 0;
    }

    reset(x: number, y: number, speed: number, color: XColor, distance: number, strokeWidth: number) {
        this._originX = x;
        this._originY = y;
        this._speed = speed;
        this._color = color;
        this._distance = distance;
        this._angle = 0;
        this._x1 = 0;
        this._x2 = 0;
        this._y1 = 0;
        this._y2 = 0;
        this._strokeWidth = strokeWidth;
        this.calc();
    }

    update() {
        this._x1 = this._x2;
        this._y1 = this._y2;
        this.calc();
    }

    private calc() {
        this._angle = this._angle > 360 ? 0 : this._angle + this._speed;
        this._x2 = this._originX + (Math.cos((Math.PI / 180) * this._angle) * this._distance);
        this._y2 = this._originY + (Math.sin((Math.PI / 180) * this._angle) * this._distance);
    }

    get x1(): number {
        return this._x1;
    }
    get x2(): number {
        return this._x2;
    }
    get y1(): number {
        return this._y1;
    }
    get y2(): number {
        return this._y2;
    }
    get color(): XColor {
        return this._color;
    }
    get strokeWidth(): number{
        return this._strokeWidth;
    }
}