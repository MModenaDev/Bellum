describe('Army', function () {
    let army;
    beforeEach(function () {
        army = new Army();
    });

    describe("Color", function() {
       it("Should be inside the constructor", function() {
           expect(army.color).toBeDefined();
       });
       it("Should be of type String", function() {
           expect(typeof(army.color)).toBe("string")
       });
    });

    describe("attack()", function() {
        it("Should return a number", function() {
            expect(typeof(army.attack())).toBe("number");
        });
    });

    describe("defend()", function() {
        it("Should return a number", function() {
            expect(typeof(army.defend())).toBe("number");
        });
    });
});