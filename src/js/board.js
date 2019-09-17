class Board {
    constructor() {
        this.territories = [{name: "US", armyColor: "black"}];
        this.totalTerritories = this.territories.length;
    }

    getTerritorries(){
        return this.territories;
    }

    setNewTerritory(territory){
        this.territories.push(territory);
    }

    getTotal(){
        return this.totalTerritories;
    }

    getTotalForArmy(armyColor) {
        return this.territories.reduce((sum, territory => {
            if(territory.ownerColor === armyColor){
                sum + 1;
            } else {
                sum + 0;
            }
        },0));
    }
}