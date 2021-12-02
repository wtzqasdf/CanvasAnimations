import XColor from "@/graphics/XColor";
import XGraphics from "@/graphics/XGraphics";
import XMath from "@/graphics/XMath";
import Star from './Star';

export default class Space {
    private _graphics: XGraphics;
    private _stars: Star[];

    private _minSpeed: number;
    private _maxSpeed: number;
    private _minAcceleration: number;
    private _maxAcceleration: number;
    private _minSize: number;
    private _maxSize: number;
    private _minSizeScaleSpeed: number;
    private _maxSizeScaleSpeed: number;
    private _colorFadeSpeed: number;

    constructor(graphics: XGraphics, maxCount: number) {
        this._graphics = graphics;
        this._minSpeed = 3;
        this._maxSpeed = 4;
        this._minAcceleration = 0.2;
        this._maxAcceleration = 0.3;
        this._minSize = 0.5;
        this._maxSize = 1.5;
        this._minSizeScaleSpeed = 0.1;
        this._maxSizeScaleSpeed = 0.2;
        this._colorFadeSpeed = 0.01;
        this._stars = [];
        for (let i = 0; i < maxCount; i++) {
            this._stars.push(new Star());
        }
    }

    public setSpeed(min: number, max: number) {
        this._minSpeed = min;
        this._maxSpeed = max;
    }
    public setAcceleration(min: number, max: number) {
        this._minAcceleration = min;
        this._maxAcceleration = max;
    }
    public setSize(min: number, max: number) {
        this._minSize = min;
        this._maxSize = max;
    }
    public setSizeScaleSpeed(min: number, max: number) {
        this._minSizeScaleSpeed = min;
        this._maxSizeScaleSpeed = max;
    }
    public setColorFadeSpeed(speed: number) {
        this._colorFadeSpeed = speed;
    }

    public update() {
        for (let i = 0; i < this._stars.length; i++) {
            const star = this._stars[i];
            star.update();
            this._graphics.drawRound(star.x, star.y, star.size, star.color);
        }
    }

    public createStar() {
        const x = this._graphics.width / 2;
        const y = this._graphics.height / 2;
        const xAngle = Math.cos((Math.PI / 180) * XMath.angle());
        const yAngle = Math.sin((Math.PI / 180) * XMath.angle());
        const speed = XMath.value(this._minSpeed, this._maxSpeed);
        const acceleration = XMath.value(this._minAcceleration, this._maxAcceleration);
        const size = XMath.value(this._minSize, this._maxSize);
        const sizeScaleSpeed = XMath.value(this._minSizeScaleSpeed, this._maxSizeScaleSpeed);
        const colorFadeSpeed = this._colorFadeSpeed;

        for (let i = 0; i < this._stars.length; i++) {
            const star = this._stars[i];
            if (star.isOutOfScreen(this._graphics.width, this._graphics.height)) {
                star.reset(x, y, xAngle, yAngle, speed, acceleration, size, sizeScaleSpeed, colorFadeSpeed);
                break;
            }
        }
    }
}