const canvas = new drawCanvas();
const subMenu = new SubMenu();

window.onload = function () {
    let song = new this.Audio("./src/songs/theme-song.mp3");
    song.loop = true;
    song.volume = 0.25;
    song.play();

    document.getElementsByClassName("start")[0].onclick = function () {
        startGame();
    };

    function startGame() {
        document.getElementsByClassName("start")[0].style.display = 'none';
        document.getElementsByClassName("main")[0].style.display = 'block';
        document.getElementsByClassName("subMenu")[0].style.display = 'block';
        subMenu.clear();
        subMenu.greetings();
    };

    document.getElementsByClassName("start")[0].onclick = function () {
        startGame();
    };

    addEventListener('mousemove', e => {
        mouseX = e.clientX;
        if (screen === "menu") {
            if (mouseX > (window.innerWidth / 2)) pill = "blue";
            else pill = "red";
        }
    });

    document.getElementsByClassName("canvas")[0].onclick = function () {
        if (screen === "menu" && pill === "red") {
            screen = "map";
            subMenu.clear();
            subMenu.startMenu();
        } else if (screen === "menu" && pill === "blue") {
            subMenu.clear();
            subMenu.problem();
        }
    };
};