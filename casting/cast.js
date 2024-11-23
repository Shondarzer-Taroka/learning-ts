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
// //  Casting vs Type Assertions
var ret = 123;
console.log(ret.length);
var wer = {};
wer.a = 'ksdf';
wer.b = 656;
// //  Casting for Arrays
var ghopi = ['77', 'tre', 'yop'];
var grip = ghopi;
grip.push('wert');
// // Force Casting (unknown to Any Type)
var value = "Hello!";
var valuelength = value; // Force casting
console.log(valuelength, '54'); // Compiles but results in incorrect behavior
console.log(grip);
console.log(wer);
console.log(getLength(1223344333));
