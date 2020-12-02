// I want to test a calculator
describe("Calculator", function() {

    // before each function, create a new instance of Calculator
    beforeEach(function() {
        calc = new Calculator();
    });

    // I am going to test the addition function
    describe("Addition tests", function() {
        // I want to get the result of 42
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            // I expect the result of 20 + 22 to be 42
            expect(calc.value).toBe(42);
        })
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        })
        it("should return an error if we don't supply two numbers", function() {
            // spy on the window object's alert function
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        })
    })
})