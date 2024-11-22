var firstName = 'hello';
var firstNameLength = firstName.length;
console.log(firstNameLength);
// // Using Angle Brackets Syntax
var secondName = 'boli bol';
var secondNameLength = firstName.length;
// // Note: Avoid angle brackets (<type>) in JSX because they conflict with HTML.
// const input = document.getElementById('myInput') as HTMLInputElement
// input.value='alklk'
// // Narrowing a Union Type
function getLength(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    return value.toString().length;
}
console.log(getLength(1223344333));
