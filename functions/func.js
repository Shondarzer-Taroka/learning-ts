var troli = function (a, b) {
    return a + b;
};
function hwel(a, b) {
    return a + b;
}
// // optional property
function optionalProperty(a, b, c) {
    return "".concat(c + ' ' + (a + b));
}
// // rest parameteres
function resLearning() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(resLearning(2, 3, 4, 5, 6, 787));
function getInfo(value) {
    if (typeof value === "string") {
        return "Name: ".concat(value);
    }
    else {
        return "Age: ".concat(value);
    }
}
console.log(getInfo("Alice")); // Output: Name: Alice
console.log(getInfo(25)); // Output: Age: 25
// console.log(troli('kkk','opoo'));
// console.log(hwel('poli','shiio'));
