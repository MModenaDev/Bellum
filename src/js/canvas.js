class drawCanvas {
    constructor() {
        this.canvas = document.getElementsByClassName('canvas')[0];
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 1020;
        this.canvas.height = 640;
        this.image = new Image();
    }

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBorder() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 20;
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
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

    setCanvasHeight(h = 640) {
        this.canvas.height = h;
    }

    drawMap(mapArray) {
        mapArray.forEach(territory => {
            this.ctx.beginPath();
            this.ctx.fillStyle = territory.ownerColor;
            this.ctx.fillRect(territory.x, territory.y, 42, 42);
            this.ctx.fillStyle = "white";
            this.ctx.font = "42px Pixel";
            this.ctx.fillText(territory.numberOfUnits, territory.x+10, territory.y+30);
            this.ctx.closePath();
        });
    }
}