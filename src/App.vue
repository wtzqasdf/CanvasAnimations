<template>
    <div class="canvas-base">
        <canvas ref="canvas" width="1920" height="1080"></canvas>
    </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity';
import { Vue } from 'vue-class-component';
import XGraphics from './graphics/XGraphics';
import BallParticle from './graphics/particles/ball/BallParticle';
import RotationLine from './graphics/rotation/RotationLine';
import Space from './graphics/particles/space/Space';
import XColor from './graphics/XColor';

export default class App extends Vue {
    xgraphics: InstanceType<typeof XGraphics> | null = ref<any>(null);
    canvas: InstanceType<typeof HTMLCanvasElement> | null = ref<any>(null);
    ballParticle!: BallParticle;
    rotationLine!: RotationLine;
    space!: Space;

    mounted() {
        const ctx = this.canvas?.getContext('2d') as CanvasRenderingContext2D;
        this.xgraphics = new XGraphics(ctx);

        //this.initBallParticle();
        //this.initRotationLine();
        //this.initSpace();
    }

    initSpace() {
        this.xgraphics!.setBackground(XColor.black);

        this.space = new Space(this.xgraphics as XGraphics, 500);
        this.space.setSpeed(1, 2);
        this.space.setAcceleration(3, 3);
        this.space.setSize(1, 1.5);
        this.space.setSizeScaleSpeed(0.02, 0.02);
        this.space.setColorFadeSpeed(0.02);
        setInterval(() => {
            let count = Math.random() * 100;
            for (let i = 0; i < count; i++) {
                this.space.createStar();
            }
        }, 100);
        this.updateSpace();
    }

    initBallParticle() {
        this.xgraphics!.setBackground(XColor.black);
        this.ballParticle = new BallParticle(this.xgraphics as XGraphics, 1000);
        this.ballParticle.setSpeed(3, 20);
        this.ballParticle.setSize(2, 10);
        this.ballParticle.setColorDeclineSpeed(0.005, 0.01);

        setInterval(() => {
            let count = Math.random() * 50;
            for (let i = 0; i < count; i++) {
                this.ballParticle.createBall();
            }
        }, 200);
        this.updateBallParticle();
    }

    initRotationLine() {
        this.xgraphics!.setBackground(new XColor(0, 0, 0, 1));
        this.xgraphics!.clear();
        this.xgraphics!.setBackground(new XColor(0, 0, 0, 0.05));

        this.rotationLine = new RotationLine(this.xgraphics as XGraphics, 150);
        this.rotationLine.setStrokeWidth(2, 2);
        this.rotationLine.setSpeed(0.5, 5);
        this.rotationLine.setColor(null);
        this.rotationLine.setDistance(1);
        this.rotationLine.createLines();
        this.updateRotationLine();
    }

    updateSpace() {
        this.xgraphics?.clear();
        this.space.update();
        window.requestAnimationFrame(this.updateSpace);
    }

    updateBallParticle() {
        this.xgraphics?.clear();
        this.ballParticle.update();
        window.requestAnimationFrame(this.updateBallParticle);
    }

    updateRotationLine() {
        this.xgraphics?.clear();
        this.rotationLine.update();
        window.requestAnimationFrame(this.updateRotationLine);
    }
}
</script>

<style>
.canvas-base {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: -99999;
}
canvas {
    width: 100%;
    height: 100%;
}
</style>
