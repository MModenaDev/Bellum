let canvas = new drawCanvas();

let pill = "red";

const engine = () => {
    canvas.clearAll();
    canvas.drawBorder();
    switch (screen = "menu") {
        case "menu":
            canvas.drawFullBackground("../../src/images/hands.png");
            canvas.drawPill(pill);
            break;
        case "victory":
            canvas.drawSmallBackground("../../src/images/flag.png");
            break;
        case "defeat":
            canvas.drawSmallBackground("../../src/images/explosion.png");
            break;
        case "map":
            canvas.drawFullBackground("../../src/images/map.png");
            break;
    };
    requestAnimationFrame(engine);
};

engine();