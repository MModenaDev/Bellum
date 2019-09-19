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
        }, 5000);
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
        }, 7500);
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
            colorButton.innerHTML = elem.toUpperCase();
            buttonBox.appendChild(colorButton);
            colorButton.onclick = () => {
                selectedColor = elem;
                enemyColor = colors.pop();
                if (enemyColor === selectedColor) enemyColor = colors.pop();
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
                if (enemyT.owner === "none") {
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
        let playerExplanation1 = document.createElement("p");
        playerExplanation1.classList.toggle("subMenu__paragraph");
        playerExplanation1.innerHTML = "With that out of the way we can start the rounds.";
        let playerExplanation2 = document.createElement("p");
        playerExplanation2.classList.toggle("subMenu__paragraph");
        playerExplanation2.innerHTML = "It will have three fases: DEPLOY, ATTACK, and MOVE.";
        let playerExplanation3 = document.createElement("p");
        playerExplanation3.classList.toggle("subMenu__paragraph");
        playerExplanation3.innerHTML = "It goes back and forth until someone is annihilated.";
        this.subMenu.appendChild(playerExplanation1);
        this.subMenu.appendChild(playerExplanation2);
        this.subMenu.appendChild(playerExplanation3);
        setTimeout(() => {
            this.clear();
            this.deploy();
        }, 7500);
    }

    deploy() {
        let reinforcements = 2 + board.getTotalForArmy(selectedColor);
        let deployText = document.createElement("p");
        deployText.classList.toggle("subMenu__paragraph");
        deployText.innerHTML = `You have ${reinforcements} reinforcements.`;
        this.subMenu.appendChild(deployText);
        let buttonBox = document.createElement("div");
        buttonBox.style.display = "flex";
        buttonBox.style.justifyContent = "space-around";
        this.subMenu.appendChild(buttonBox);
        let deployButton = document.createElement("div");
        deployButton.classList.add("subMenu__paragraph--color");
        deployButton.innerHTML = "DEPLOY";
        buttonBox.appendChild(deployButton);
        deployButton.onclick = () => {
            let lMenu = document.getElementsByClassName("lateralMenu")[0];
            lMenu.innerHTML = "";
            lMenu.style.display = 'block';
            board.getTerritorries().forEach((territory) => {
                if (territory.owner === "Player") {
                    let territoryBox = document.createElement("div");
                    territoryBox.style.display = "flex";
                    territoryBox.style.justifyContent = "space-between";
                    lMenu.appendChild(territoryBox);
                    let minus = document.createElement("div");
                    let landName = document.createElement("div");
                    let plus = document.createElement("div");
                    minus.classList.toggle("lateralMenu__sign");
                    landName.classList.toggle("lateralMenu__name");
                    plus.classList.toggle("lateralMenu__sign");
                    minus.innerHTML = "-";
                    landName.innerHTML = territory.name;
                    plus.innerHTML = "+";
                    territoryBox.appendChild(minus);
                    territoryBox.appendChild(landName);
                    territoryBox.appendChild(plus);
                    minus.onclick = () => {
                        if (territory.numberOfUnits > 1) {
                            territory.numberOfUnits -= 1;
                            reinforcements += 1;
                        }
                    };
                    plus.onclick = () => {
                        if (reinforcements > 0) {
                            territory.numberOfUnits += 1;
                            reinforcements -= 1;
                        }
                    };
                }
            })

        };
        let doneButton = document.createElement("div");
        doneButton.classList.add("subMenu__paragraph--color");
        doneButton.innerHTML = "DONE";
        buttonBox.appendChild(doneButton);
        doneButton.onclick = () => {
            let lMenu = document.getElementsByClassName("lateralMenu")[0];
            lMenu.style.display = 'none';
            lMenu.innerHTML = "";
            this.clear();
            this.attack();
        };
    }

    attack() {
        let attackText = document.createElement("p");
        attackText.classList.toggle("subMenu__paragraph");
        attackText.innerHTML = "It's your turn to attack.";
        this.subMenu.appendChild(attackText);
        let buttonBox = document.createElement("div");
        buttonBox.style.display = "flex";
        buttonBox.style.justifyContent = "space-around";
        this.subMenu.appendChild(buttonBox);
        let attackButton = document.createElement("div");
        attackButton.classList.add("subMenu__paragraph--color");
        attackButton.innerHTML = "ATTACK";
        buttonBox.appendChild(attackButton);
        attackButton.onclick = () => {
            let lMenu = document.getElementsByClassName("lateralMenu")[0];
            lMenu.innerHTML = "";
            lMenu.style.display = 'block';
            board.getTerritorries().forEach((territory) => {
                if (territory.owner === "Player") {
                    territory.neighbors.forEach((neighbor) => {
                        if (neighbor.owner != "Player") {
                            let attackBox = document.createElement("div");
                            attackBox.style.display = "flex";
                            attackBox.style.justifyContent = "space-around";
                            lMenu.appendChild(attackBox);
                            let attackRoute = document.createElement("div");
                            attackRoute.classList.toggle("lateralMenu__sign");
                            attackRoute.innerHTML = `${territory.name} >> ${neighbor}`.toUpperCase();
                            attackBox.appendChild(attackRoute);
                            attackRoute.onclick = () => {
                                let en = board.getTerritorries().filter((elem) => (elem.name === neighbor));
                                if(en[0].owner != "Player") {
                                    debugger;
                                    let defenseRoll = [];
                                    let attackRoll = [];
                                    let playerLimiter = 4;
                                    let enemyLimiter = 3;
                                    if(territory.numberOfUnits < 3) playerLimiter = territory.numberOfUnits;
                                    if(en[0].numberOfUnits < 3) enemyLimiter = en[0].numberOfUnits;
                                    for(let i = 1; i<playerLimiter; i += 1){
                                        attackRoll.push(Math.floor(Math.random() * 6) + 1);
                                    }
                                    for(let i = 0; i<enemyLimiter; i += 1){
                                        defenseRoll.push(Math.floor(Math.random() * 6) + 1);
                                    }
                                    attackRoll.sort((a,b) => b-a);
                                    defenseRoll.sort((a,b) => b-a);
                                    let resultArray = [];
                                    if(attackRoll.length >= defenseRoll.length){
                                        defenseRoll.forEach((elem, index) => {
                                            resultArray.push(elem-attackRoll[index]);
                                        });
                                    } else {
                                        attackRoll.forEach((elem, index) => {
                                            resultArray.push(defenseRoll[index]-elem);
                                        });
                                    }
                                    resultArray.forEach((elem) => {
                                        if(elem >= 0){
                                            territory.numberOfUnits -= 1;
                                        } else {
                                            en[0].numberOfUnits -= 1;
                                        }
                                    });
                                    if(en[0].numberOfUnits <= 0) {
                                        en[0].newOwner("Player", selectedColor);
                                        territory.numberOfUnits -= 1;
                                        en[0].numberOfUnits = 1;
                                    }
                                }
                            }
                        }
                    })
                }
            })

        };
        let doneButton = document.createElement("div");
        doneButton.classList.add("subMenu__paragraph--color");
        doneButton.innerHTML = "DONE";
        buttonBox.appendChild(doneButton);
        doneButton.onclick = () => {
            let lMenu = document.getElementsByClassName("lateralMenu")[0];
            lMenu.style.display = 'none';
            lMenu.innerHTML = "";
            this.clear();
            this.move();
        };
    }

    move() {
        let dislocatedArmies = 0;
        let moveText = document.createElement("p");
        moveText.classList.toggle("subMenu__paragraph");
        moveText.innerHTML = `Now that you're done with your attacks, allocate them to where you think it's tactically advantageous.`;
        this.subMenu.appendChild(moveText);
        let buttonBox = document.createElement("div");
        buttonBox.style.display = "flex";
        buttonBox.style.justifyContent = "space-around";
        this.subMenu.appendChild(buttonBox);
        let moveButton = document.createElement("div");
        moveButton.classList.add("subMenu__paragraph--color");
        moveButton.innerHTML = "MOVE";
        buttonBox.appendChild(moveButton);
        moveButton.onclick = () => {
            let lMenu = document.getElementsByClassName("lateralMenu")[0];
            lMenu.innerHTML = "";
            lMenu.style.display = 'block';
            board.getTerritorries().forEach((territory) => {
                if (territory.owner === "Player") {
                    let territoryBox = document.createElement("div");
                    territoryBox.style.display = "flex";
                    territoryBox.style.justifyContent = "space-between";
                    lMenu.appendChild(territoryBox);
                    let minus = document.createElement("div");
                    let landName = document.createElement("div");
                    let plus = document.createElement("div");
                    minus.classList.toggle("lateralMenu__sign");
                    landName.classList.toggle("lateralMenu__name");
                    plus.classList.toggle("lateralMenu__sign");
                    minus.innerHTML = "-";
                    landName.innerHTML = territory.name;
                    plus.innerHTML = "+";
                    territoryBox.appendChild(minus);
                    territoryBox.appendChild(landName);
                    territoryBox.appendChild(plus);
                    minus.onclick = () => {
                        if (territory.numberOfUnits > 1) {
                            territory.numberOfUnits -= 1;
                            dislocatedArmies += 1;
                        }
                    };
                    plus.onclick = () => {
                        if (dislocatedArmies > 0) {
                            territory.numberOfUnits += 1;
                            dislocatedArmies -= 1;
                        }
                    };
                }
            })

        };
        let doneButton = document.createElement("div");
        doneButton.classList.add("subMenu__paragraph--color");
        doneButton.innerHTML = "DONE";
        buttonBox.appendChild(doneButton);
        doneButton.onclick = () => {
            let lMenu = document.getElementsByClassName("lateralMenu")[0];
            lMenu.style.display = 'none';
            lMenu.innerHTML = "";
            this.clear();
            this.enemieAttack();
        };
    }

    enemieAttack() {
        let enemyText = document.createElement("p");
        enemyText.classList.toggle("subMenu__paragraph");
        enemyText.innerHTML = "Enemy Playing ...";
        this.subMenu.appendChild(enemyText);
        setTimeout(() => {
            board.getTerritorries().forEach((territory) => {
                let reinforcements = 2 + board.getTotalForArmy(enemyColor);
                if (territory.owner === "Enemy" && reinforcements > 0) {
                    territory.neighbors.forEach((neighbor) => {
                        let en = board.getTerritorries().filter((elem) => (elem.name === neighbor));
                        if(en[0].owner != "Enemy") {
                            territory.numberOfUnits += reinforcements;
                            reinforcements = 0;
                        }
                    }
                )};
                if (territory.owner === "Enemy" && territory.numberOfUnits > 1) {
                    territory.neighbors.forEach((neighbor) => {
                        let en = board.getTerritorries().filter((elem) => (elem.name === neighbor));
                        if(en[0].owner != "Enemy") {
                            let defenseRoll = [];
                            let attackRoll = [];
                            for(let i = 1; i<territory.numberOfUnits; i += 1){
                                attackRoll.push(Math.floor(Math.random() * 6) + 1);
                            }
                            for(let i = 0; i<en[0].numberOfUnits; i += 1){
                                defenseRoll.push(Math.floor(Math.random() * 6) + 1);
                            }
                            attackRoll.sort((a,b) => b-a);
                            defenseRoll.sort((a,b) => b-a);
                            let resultArray = [];
                            if(attackRoll.length >= defenseRoll.length){
                                defenseRoll.forEach((elem, index) => {
                                    resultArray.push(elem-attackRoll[index]);
                                });
                            } else {
                                attackRoll.forEach((elem, index) => {
                                    resultArray.push(defenseRoll[index]-elem);
                                });
                            }
                            console.log(resultArray);
                            
                            resultArray.forEach((elem) => {
                                if(elem >= 0){
                                    territory.numberOfUnits -= 1;
                                } else {
                                    en[0].numberOfUnits -= 1;
                                }
                            });
                            if(en[0].numberOfUnits <= 0) {
                                en[0].newOwner("Enemy", enemyColor);
                                let moveArmy = territory.numberOfUnits - 1;
                                territory.numberOfUnits = 1;
                                en[0].numberOfUnits = moveArmy;
                            }
                        }
                    });
                }
            });
            this.checkConditions();
        }, 2500);
    }

    checkConditions() {
        if(board.getTotalForArmy(selectedColor) === 0) {
            document.getElementsByClassName("subMenu")[0].style.display = 'none';
            screen = "defeat";
        } else if (board.getTotalForArmy(enemyColor) === 0) {
            document.getElementsByClassName("subMenu")[0].style.display = 'none';
            screen = "victory";
        } else {
            this.clear();
            this.deploy();
        }
    }
}