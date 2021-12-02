import XColor from "../../XColor";

export default class Ball {
    private _x: number;
    private _y: number;
    private _xAngle: number;
    private _yAngle: number;
    private _speed: number;
    private _size: number;
    private _color: XColor;
    private _colorDeclineSpeed: number;

    constructor() {
        this._x = 0;
        this._y = 0;
        this._xAngle = 0;
        this._yAngle = 0;
        this._speed = 0;
        this._size = 0;
        this._color = new XColor(0, 0, 0, 0);
        this._colorDeclineSpeed = 0;
    }

    reset(x: number, y: number, xAngle: number, yAngle: number, speed: number, size: number, color: XColor, colorDeclineSpeed: number): void {
        this._x = x;
        this._y = y;
        this._xAngle = xAngle;
        this._yAngle = yAngle;
        this._speed = speed;
        this._size = size;
        this._color = color;
        this._colorDeclineSpeed = colorDeclineSpeed;
    }

    update(): void {
        this._x += this._xAngle * this._speed;
        this._y += this._yAngle * this._speed;
        this._color.alpha -= this._colorDeclineSpeed;
    }

    isDead(): boolean {
        return this._color.alpha <= 0;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get size(): number {
        return this._size;
    }

    get color(): XColor {
        return this._color;
    }
}