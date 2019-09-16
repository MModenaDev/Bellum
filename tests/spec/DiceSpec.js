describe('Dice', function () {
    var dice;
    beforeEach(function () {
       dice = new Dice();
    });

    describe("Result", function() {
        it("Should be inside the constructor", function() {
            expect(dice.result).toBeDefined();
        });
        it("Should be of type Number", function() {
            expect(typeof(dice.result)).toBe("number");
        });
        it("Should never be bellow 1", function() {
            expect(dice.result).toBeGreaterThan(0);
        });
        it("Should never be above 6", function() {
            expect(dice.result).toBeLessThan(7);
        });
    });

    describe("roll()", function() {
        it("Should return a number", function() {
            expect(typeof(dice.roll())).toBe("number");
        });
    })
});