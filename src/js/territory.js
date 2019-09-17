class Territory {
    constructor(name, owner, ownerColor, neighbors, x, y){
        this.name = name;
        this.owner = owner;
        this.ownerColor = ownerColor;
        this.numberOfUnits = 1;
        this.neighbors = neighbors;
        this.x = x;
        this.y = y;
    }

    owner() {
        return this.owner;
    }

    newOwner(newOwner) {
        this.owner =  newOwner;
    }

    sizeOfArmy() {
        return this.numberOfUnits;
    }

    neighbors() {
        return this.neighbors;
    }
    
}