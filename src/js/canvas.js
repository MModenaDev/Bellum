class drawCanvas {
    constructor() {
        this.ctx = document.getElementsByClassName('canvas')[0].getContext('2d');
        this.image = new Image();
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
        this.image.src = imageSource;
        this.ctx.drawImage(this.image, 10, 10, 1000, 620);

    }

    drawSmallBackground(imageSource) {
        this.image.src = imageSource;
        this.ctx.drawImage(this.image, 360, 10, 300, 300);
    }

    drawPill(pill) {
        if(pill === "red"){
            this.ctx.beginPath();
            this.ctx.fillStyle = pill;
            this.ctx.fillRect(250,135,135,50);
            this.ctx.fillStyle = "white";
            this.ctx.font = "70px Pixel";
            this.ctx.fillText("REAL", 275, 180);
            this.ctx.closePath();
        } else {
            this.ctx.beginPath();
            this.ctx.fillStyle = pill;
            this.ctx.fillRect(585,135,135,50);
            this.ctx.fillStyle = "white";
            this.ctx.font = "70px Pixel";
            this.ctx.fillText("FUN", 615, 180);
            this.ctx.closePath();
        }
    }
}