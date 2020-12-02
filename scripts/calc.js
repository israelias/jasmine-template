function Calculator() {
    this.value = 0;
}

// Everytime our add function is called
Calculator.prototype.add = function(number) {
    // if it's a number
    if (typeof (number) == "number") {
        // increment our running total
        this.value += number;
        // otherwise
    } else {
        // return an error
        alert("Error!");
    }
}

// non-refactored version

// function addition(numOne, numTwo) {
//     if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
//         return numOne + numTwo;
//     } else {
//         alert("Error!");
//     }
// }