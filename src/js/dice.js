class Dice {
    constructor() {
        this.result = Math.floor(Math.random() * 6) + 1;
    }

    roll() {
        return this.result;
    }
}