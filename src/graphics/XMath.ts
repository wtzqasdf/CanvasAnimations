export default class XMath {
    /**
     * 隨機產生0 ~ 360其中一個角度值
     */
    public static angle(): number {
        return Math.random() * 360;
    }

    /**
     * 隨機產生一個值
     */
    public static value(min: number, max: number): number{
        const current = Math.random() * max;
        return current <= min ? min : current;
    }
}