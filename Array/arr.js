// // type way
var num;
// // generic way
var mun;
num = ['iuey', 'sjdfhsj'];
mun = ['ooo', 'iuwry'];
var users;
users = [
    {
        id: 'jjjjsdff',
        name: 'hamid'
    },
    {
        id: 'jjjjsdff',
        name: 'hamid'
    },
    {
        id: 'jjjjsdff',
        name: 'hamid'
    }
];
// // Mixed-Type Arrays Use union types to allow multiple types:
var bod;
bod = ['slkdf', 'hjkjhjhj', 8768767, true];
// // Arrays of Arrays Nested arrays are also supported
var matrix;
matrix = [
    [1, 1, 2, 34, 43, 43, 54, 35, 4456, 4, 65, 5, 65, 5],
    [345, 4546, 5, 65, 7, 678, 8, 78, 7, 98, 9, 80,]
];
// // Dynamic Arrays Use any[] for arrays with unknown element types
var bom;
bom = [23, 'foe', 8767, 'mk', false, { a: 'uy', b: 0 }];
// // Define a type for an array of strings
// type ElementType = string[];
// // Extract the type of a single element from the array
// type SingleElement = ElementType[number]; // Equivalent to 'string'
// // Example usage
// const names: ElementType = ["Alice", "Bob", "Charlie"];
// // This variable must be of type 'string' because it matches 'SingleElement'
// const firstName: SingleElement = names[0]; // "Alice"
// // Trying to assign a non-string value will result in an error
// // const invalidName: SingleElement = 123; // Error: Type 'number' is not assignable to type 'string'
// // A function that accepts a single element from the array
// function greet(name: SingleElement) {
//   console.log(`Hello, ${name}!`);
// }
// // Call the function with a value from the array
// greet(names[1]); // Output: "Hello, Bob!"
// //  console.log(bom);
