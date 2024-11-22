/*
Type aliases in TypeScript allow you to define a custom name for a type,
which can represent a primitive, object, array, function, or even other types.
It’s like creating a shorthand or a new name for a type to make your code
more readable and reusable.
*/
var age = 888787;
var gh = 'kkkk';
console.log(age);
var user = {
    a: 'homan',
    b: 7676,
    c: false
};
var res = [
    'sdf',
    'tro',
    'wer',
    'sfd'
];
var getName = function (name, age) { return name + age; };
var id = 9888;
var person;
// person = { name: "Alice", email: "alice@example.com" }; // Valid
person = { name: "Bob", role: "Administrator" }; // Valid
// person = { name: "Charlie" };                       // Error: Property 'email' or 'role' is missing
person = { name: 'dd', email: 'dd', role: 'ff', huy: false };
console.log(person);
