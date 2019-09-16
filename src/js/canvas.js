/*
    TODO: Image fix
*/
class drawCanvas {
    constructor() {
        this.ctx = document.getElementsByClassName('canvas')[0].getContext('2d');
    }

    draw(screen = "map") {
        this.drawBorder();
        switch (screen) {
            case "menu":
                this.drawFullBackground("../../src/images/hands.png");
                break;
            case "victory":
                this.drawSmallBackground("../../src/images/flag.png");
                break;
            case "defeat":
                this.drawSmallBackground("../../src/images/explosion.png");
                break;
            default:
                this.drawFullBackground("../../src/images/map.png");
                break;
        };
    }

    clearAll() {
        this.ctx.clearRect(0, 0, 1000, 620);
    }

    drawBorder() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 20;
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(0, 0, 1020, 640);
        this.ctx.closePath();
    }

    drawFullBackground(imageSource) {
        let image = new Image();
        image.src = imageSource;
        image.onload = () => {
            this.ctx.drawImage(image, 10, 10, 1000, 620);
        };
    }

    drawSmallBackground(imageSource) {
        let image = new Image();
        image.src = imageSource;
        image.onload = () => {
            this.ctx.drawImage(image,360, 10, 300, 300);
        };
    }
}

let canvas = new drawCanvas();
canvas.draw();