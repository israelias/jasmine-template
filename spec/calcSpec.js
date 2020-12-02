// I want to test a calculator
describe("Calculator", function() {
    // I am going to test the addition function
    describe("Addition tests", function() {
        // I want to get the result of 42
        it("should return 42", function() {
            // I expect the result of 20 + 22 to be 42
            expect(addition(20, 22)).toBe(42);
        })
        it("should return 26", function() {
            expect(addition(7, 19)).toBe(26);
        })
        it("should return an error if we don't supply two numbers", function() {
            expect(addition("Hitchhikers", "Guide")).toBe("Error!");
        })
    })
})