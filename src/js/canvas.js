class drawCanvas {
    constructor() {
        this.ctx = document.getElementsByClassName('canvas')[0].getContext('2d');
    }

    draw(screen = "map") {
        this.drawBorder();
        this.drawBackground();
    }

    clearAll() {
        this.ctx.clearRect(0, 0, 1000, 620);
    }

    drawBorder() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 20;
        this.ctx.strokeStyle = "black";
        this.ctx.rect(0, 0, 1000, 620);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawBackground(imageSource = "../images/map.png") {
        let img = new Image();
        img.src = imageSource; 
        img.onload = () => {
            this.ctx.drawImage(img, 0, 0, 1000, 620);
        };
    }
}

let canvas = new drawCanvas();
canvas.draw();