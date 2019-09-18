class SubMenu {
    constructor() {
        this.subMenu = document.getElementsByClassName("subMenu")[0];
    };

    clear() {
        this.subMenu.innerHTML = "";
    }

    greetings() {
        let initialGreet = document.createElement("p");
        initialGreet.classList.toggle("subMenu__paragraph");
        initialGreet.innerHTML = "Hello player, welcome to Bellum, where every action has a consequence.".toUpperCase();
        let greet1 = document.createElement("p");
        greet1.classList.toggle("subMenu__paragraph");
        greet1.innerHTML = "In this menu you have to choose between the modes REAL and FUN.";
        let greet2 = document.createElement("p");
        greet2.classList.toggle("subMenu__paragraph");
        greet2.innerHTML = "In the REAL mode you will experience the simulation most close to reality.";
        let greet3 = document.createElement("p");
        greet3.classList.toggle("subMenu__paragraph");
        greet3.innerHTML = "Contrary to the first one, FUN mode is as unrealistic as it's fun and outrageous.";
        this.subMenu.appendChild(initialGreet);
        setTimeout(() => {
            if (screen === "menu") {
                this.clear();
                this.subMenu.appendChild(greet1);
                this.subMenu.appendChild(greet2);
                this.subMenu.appendChild(greet3);
            }
        }, 7500);
    }

    problem() {
        let problem1 = document.createElement("p");
        problem1.classList.toggle("subMenu__paragraph");
        problem1.innerHTML = "Sorry for the trouble, but this mode is currently under development.";
        let problem2 = document.createElement("p");
        problem2.classList.toggle("subMenu__paragraph");
        problem2.innerHTML = "Please choose another mode.";
        this.subMenu.appendChild(problem1);
        this.subMenu.appendChild(problem2);
    }

    startMenu() {
        let gamesDescription1 = document.createElement("p");
        gamesDescription1.classList.toggle("subMenu__paragraph");
        gamesDescription1.innerHTML = "This games follows the same principles of War, you organize, take decisions and pass the turn.";
        let gamesDescription2 = document.createElement("p");
        gamesDescription2.classList.toggle("subMenu__paragraph");
        gamesDescription2.innerHTML = "Repeat that until there is someone who achieves their secret goal, and there you have it, THE GAME.";
        this.subMenu.appendChild(gamesDescription1);
        this.subMenu.appendChild(gamesDescription2);
        setTimeout(() => {
            this.clear();
            this.chooseColor();
        }, 10000);
    }

    chooseColor() {
        let colorText = document.createElement("p");
        colorText.classList.toggle("subMenu__paragraph");
        colorText.innerHTML = "The first step is to choose the color of your army. Pick below:";
        this.subMenu.appendChild(colorText);
        let buttonBox = document.createElement("div");
        buttonBox.style.display = "flex";
        buttonBox.style.justifyContent = "space-around";
        this.subMenu.appendChild(buttonBox);
        colors.forEach((elem) => {
            let colorButton = document.createElement("div");
            colorButton.classList.add("subMenu__paragraph--color");
            colorButton.innerHTML = elem;
            buttonBox.appendChild(colorButton);
            colorButton.onclick = () => {
                selectedColor = elem;
                enemyColor = colors.pop();
                if(enemyColor === selectedColor) enemyColor = colors.pop();
                this.clear();
                this.chooseLocation();
            };
        });
    }

    chooseLocation() {
        let locationText = document.createElement("p");
        locationText.classList.toggle("subMenu__paragraph");
        locationText.innerHTML = "Now choose one of the starting locations:";
        this.subMenu.appendChild(locationText);
        let buttonBox = document.createElement("div");
        buttonBox.style.display = "flex";
        buttonBox.style.justifyContent = "space-around";
        this.subMenu.appendChild(buttonBox);
        board.getTerritorries().forEach((elem) => {
            let locationButton = document.createElement("div");
            locationButton.classList.add("subMenu__paragraph--color");
            locationButton.innerHTML = elem.name;
            buttonBox.appendChild(locationButton);
            locationButton.onclick = () => {
                elem.newOwner("Player", selectedColor);
                let enemyT = board.getTerritorries()[0];
                if(enemyT.owner === "none") {
                    enemyT.newOwner("Enemy", enemyColor);
                } else {
                    let enemyNewT = board.getTerritorries();
                    board.getTerritorries()[enemyNewT.length - 1].newOwner("Enemy", enemyColor);
                }
                mapStatus = true;
                this.clear();
                this.startRounds();
            };
        });
    }

    startRounds() {

    }

}