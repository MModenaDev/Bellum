const engine = () => {
    canvas.clearAll();
    canvas.setCanvasHeight();
    if(screen === "menu") canvas.setCanvasHeight(400);
    switch (screen) {
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
    canvas.drawBorder();
    requestAnimationFrame(engine);
};

document.onkeydown = (e) => {
    switch (e.keyCode) {
        case 82: // R - choose red pill (real) on menu
            pill = "red";
            break;
        case 70: // F - choose blue pill (fun) on menu
            pill = "blue";
            break;
        case 64: // A - attack
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 37: // esquerda
            break;
        case 13: // Enter - execute function based on variables
            if(screen === "menu" && pill === "red") {
                screen = "map";
            };
            if(screen === "menu" && pill === "blue") {
                subMenu.clear();
                subMenu.problem();
            };
            break;

    }
};

engine();