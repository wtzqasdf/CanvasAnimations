import XGraphics from '../XGraphics';
import RoundLine from './RoundLine';
import XMath from '../XMath';
import XColor from '../XColor';

/**
 * 旋轉線條
 */
export default class RotationLine {
    private _graphics: XGraphics;
    private _lines: RoundLine[];

    private _minStrokeWidth: number;
    private _maxStrokeWidth: number;
    private _minSpeed: number;
    private _maxSpeed: number;
    private _fixedColor: null | XColor;
    private _distance: number;

    constructor(graphics: XGraphics, maxCount: number) {
        this._graphics = graphics;
        this._minStrokeWidth = 1;
        this._maxStrokeWidth = 3;
        this._minSpeed = 1;
        this._maxSpeed = 4;
        this._fixedColor = null;
        this._distance = 1;
        this._lines = [];
        for (let i = 0; i < maxCount; i++) {
            this._lines.push(new RoundLine());
        }
    }

    setStrokeWidth(min: number, max: number) {
        this._minStrokeWidth = min;
        this._maxStrokeWidth = max;
    }
    setSpeed(min: number, max: number) {
        this._minSpeed = min;
        this._maxSpeed = max;
    }
    setColor(color: null | XColor) {
        this._fixedColor = color;
    }
    setDistance(d: number) {
        this._distance = d;
    }

    public update() {
        for (let i = 0; i < this._lines.length; i++) {
            const line = this._lines[i];
            line.update();
            this._graphics.drawLine(line.x1, line.y1, line.x2, line.y2, line.color, line.strokeWidth);
        }
    }

    public createLines() {
        const x = this._graphics.width / 2;
        const y = this._graphics.height / 2;

        for (let i = 0; i < this._lines.length; i++) {
            const line = this._lines[i];
            const speed = XMath.value(this._minSpeed, this._maxSpeed);
            const color = this._fixedColor === null ? XColor.getRandom() : this._fixedColor;
            const strokeWidth = XMath.value(this._minStrokeWidth, this._maxStrokeWidth);
            const distance = (i + this._distance) * 15;
            line.reset(x, y, speed, color, distance, strokeWidth);
        }
    }
}