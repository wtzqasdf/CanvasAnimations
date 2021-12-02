import XColor from "@/graphics/XColor";

export default class Star {
    private _x: number;
    private _y: number;
    private _xAngle: number;
    private _yAngle: number;

    private _speed: number;
    private _acceleration: number;

    private _size: number;
    private _sizeScaleSpeed: number;

    private _color: XColor;
    private _colorFadeSpeed: number;

    constructor() {
        this._x = -100;
        this._y = -100;
        this._xAngle = 0;
        this._yAngle = 0;
        this._speed = 0;
        this._acceleration = 0;
        this._size = 0;
        this._sizeScaleSpeed = 0;
        this._color = new XColor(0, 0, 0, 0);
        this._colorFadeSpeed = 0;
    }

    reset(
        x: number,
        y: number,
        xAngle: number,
        yAngle: number,
        speed: number,
        acceleration: number,
        size: number,
        sizeScaleSpeed: number,
        colorFadeSpeed: number) {
        this._x = x;
        this._y = y;
        this._xAngle = xAngle;
        this._yAngle = yAngle;
        this._speed = speed;
        this._acceleration = acceleration;
        this._size = size;
        this._sizeScaleSpeed = sizeScaleSpeed;
        this._color.setRGBA(255, 255, 255, 0);
        this._colorFadeSpeed = colorFadeSpeed;
    }

    update(): void {
        this._speed += this._acceleration;
        this._size += this._sizeScaleSpeed;
        this._x += this._xAngle * this._speed;
        this._y += this._yAngle * this._speed;
        this._color.alpha += this._colorFadeSpeed;
    }

    isOutOfScreen(sw: number, sh: number) {
        //left
        return this._x + this._size < -10 ||
            //right
            this._x > (sw + 10) ||
            //top
            this._y + this._size < -10 ||
            //bottom
            this._y > (sh + 10);
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