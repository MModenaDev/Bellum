class Territory {
    constructor(name, owner, ownerColor, neighbors){
        this.name = name;
        this.owner = owner;
        this.ownerColor = ownerColor;
        this.numberOfUnits = 1;
        this.neighbors = neighbors;
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