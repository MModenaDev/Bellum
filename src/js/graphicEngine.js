const engine = () => {
    canvas.clearAll();
    canvas.setCanvasHeight();
    if (screen === "menu") canvas.setCanvasHeight(400);
    switch (screen) {
        case "menu":
            canvas.drawFullBackground("./src/images/hands.png");
            canvas.drawPill(pill);
            break;
        case "victory":
            canvas.drawSmallBackground("./src/images/flag.png");
            canvas.drawVictory();
            break;
        case "defeat":
            canvas.drawSmallBackground("./src/images/explosion.png");
            canvas.drawDefeat();
            break;
        case "map":
            canvas.drawFullBackground("./src/images/map.png");
            canvas.drawMap(board.getTerritorries());
            break;
    };
    canvas.drawBorder();
    requestAnimationFrame(engine);
};
engine();