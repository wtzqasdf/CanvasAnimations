export default class XColor {
    private _red: number;
    private _green: number;
    private _blue: number;
    private _alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        this._red = red;
        this._green = green;
        this._blue = blue;
        this._alpha = alpha;
    }

    get cssStyle(): string {
        return `rgba(${this._red}, ${this._green}, ${this._blue}, ${this._alpha})`;
    }

    get red(): number {
        return this._red;
    }
    set red(r: number) {
        this._red = r;
    }

    get green(): number {
        return this._green;
    }
    set green(g: number) {
        this._green = g;
    }

    get blue(): number {
        return this._blue;
    }
    set blue(b: number) {
        this._blue = b;
    }

    get alpha(): number {
        return this._alpha;
    }
    set alpha(a: number) {
        this._alpha = a;
    }

    setRGBA(r: number, g: number, b: number, a: number) {
        this._red = r;
        this._green = g;
        this._blue = b;
        this._alpha = a;
    }

    //static properties
    public static get black(): XColor {
        return new XColor(0, 0, 0, 1);
    }
    public static get white(): XColor {
        return new XColor(255, 255, 255, 1);
    }
    public static getRandom(): XColor {
        return new XColor(Math.random() * 255, Math.random() * 255, Math.random() * 255, 1);
    }
}