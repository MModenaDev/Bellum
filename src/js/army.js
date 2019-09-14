class Army {
    constructor(color = "red"){
        this.color = color;
    };

    attack(defenseValue){
        let dice = new Dice();
        return dice.roll()-defenseValue;
    };

    defend(){
        let dice = new Dice();
        return dice.roll();
    };
}