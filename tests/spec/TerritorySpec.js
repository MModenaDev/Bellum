/*
    TODO: change newOnwer() so it checks if the variable chages after its called
*/

describe('Territory', function () {
    var territory;
    beforeEach(function () {
        territory = new Territory("Brazil","Marco", "Black", ["Argentina"]);
    });

    describe("Name", function() {
        it("Should be a defined", function() {
            expect(territory.name).toBeDefined();
        });
        it("Should be a String", function() {
            expect(typeof(territory.name)).toBe("string");
        });
    });
    
    describe("Owner", function() {
        it("Should be a defined", function() {
            expect(territory.owner).toBeDefined();
        });
        it("Should be a String", function() {
            expect(typeof(territory.owner)).toBe("string");
        });
    });

    describe("OwnerColor", function() {
        it("Should be a defined", function() {
            expect(territory.ownerColor).toBeDefined();
        });
        it("Should be a String", function() {
            expect(typeof(territory.ownerColor)).toBe("string");
        });
    });

    describe("Number of units", function() {
        it("Should be a defined", function() {
            expect(territory.numberOfUnits).toBeDefined();
        });
        it("Should be a Number", function() {
            expect(typeof(territory.numberOfUnits)).toBe("number");
        });
        it("Should be greater than -1", function() {
            expect(territory.numberOfUnits).toBeGreaterThan(-1);
        });
    });

    describe("Neighbors", function() {
        it("Should be a defined", function() {
            expect(territory.neighbors).toBeDefined();
        });
        it("Should be an Object", function() {
            expect(typeof(territory.neighbors)).toBe("object");
        });
    });

    describe("owner()", function() {
        it("Should return a string", function() {
            expect(typeof(territory.owner())).toBe("string")
        });
    });

    describe("newOwner()", function() {
        it("Should be a function", function() {
            expect(typeof(territory.newOwner())).toBe("function");
        });
        it("Should change the value of owner", function() {
            expect().nothing();
        });
    });

    describe("sizeOfArmy()", function() {
        it("Should return a number", function() {
            expect(typeof(territory.sizeOfArmy())).toBe("number");
        });
    });

    describe("neighbors()", function() {
        it("Should return an array", function() {
            // expect(typeof(territory.neighbors())).toBe("object");
        });
    });
});
