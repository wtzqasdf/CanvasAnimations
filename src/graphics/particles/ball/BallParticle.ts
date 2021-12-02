import XGraphics from '../../XGraphics';
import Ball from './Ball';
import XMath from '../../XMath';
import XColor from '../../XColor';

/**
 * 球粒子
 */
export default class BallParticle {
    private _graphics: XGraphics;
    private _balls: Ball[];

    private _minSpeed: number;
    private _maxSpeed: number;
    private _minSize: number;
    private _maxSize: number;
    private _minColorDeclineSpeed: number;
    private _maxColorDeclineSpeed: number;

    constructor(graphics: XGraphics, maxCount: number) {
        this._graphics = graphics;
        this._minSpeed = 3;
        this._maxSpeed = 10;
        this._minSize = 5;
        this._maxSize = 20;
        this._minColorDeclineSpeed = 0.01;
        this._maxColorDeclineSpeed = 0.05;

        this._balls = [];
        for (let i = 0; i < maxCount; i++) {
            const ball = new Ball();
            this._balls.push(ball);
        }
    }

    public setSpeed(min: number, max: number) {
        this._minSpeed = min;
        this._maxSpeed = max;
    }
    public setSize(min: number, max: number) {
        this._minSize = min;
        this._maxSize = max;
    }
    public setColorDeclineSpeed(min: number, max: number) {
        this._minColorDeclineSpeed = min;
        this._maxColorDeclineSpeed = max;
    }

    public update() {
        for (let i = 0; i < this._balls.length; i++) {
            const ball = this._balls[i];
            if (ball.isDead()) {
                continue;
            }
            ball.update();
            this._graphics.drawRound(ball.x, ball.y, ball.size, ball.color);
        }
    }

    public createBall() {
        const x = this._graphics.width / 2;
        const y = this._graphics.height / 2;
        const xAngle = Math.cos((Math.PI / 180) * XMath.angle());
        const yAngle = Math.sin((Math.PI / 180) * XMath.angle());
        const speed = XMath.value(this._minSpeed, this._maxSpeed);
        const size = XMath.value(this._minSize, this._maxSize);
        const colorDeclineSpeed = XMath.value(this._minColorDeclineSpeed, this._maxColorDeclineSpeed);

        for (let i = 0; i < this._balls.length; i++) {
            const ball = this._balls[i];
            if (ball.isDead()) {
                ball.reset(x, y, xAngle, yAngle, speed, size, XColor.getRandom(), colorDeclineSpeed);
                break;
            }
        }
    }
}