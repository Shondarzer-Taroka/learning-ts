// // type way
let num:string[]

// // generic way
let mun:Array<string>
num=['iuey','sjdfhsj']
mun=['ooo','iuwry']

// // Arrays of Objects Define the structure of the object using an interface or a type:

 interface Userarr{
 id:string;
 name:string;
 }

 let users:Userarr[]

 users=[
{
    id:'jjjjsdff',
    name:'hamid'
 },
 {
    id:'jjjjsdff',
    name:'hamid'
 },
 {
    id:'jjjjsdff',
    name:'hamid'
 }
]

// // Mixed-Type Arrays Use union types to allow multiple types:

let bod:(string|number|boolean)[]
bod=['slkdf','hjkjhjhj',8768767,true]


// // Arrays of Arrays Nested arrays are also supported

let matrix:number[][]
matrix=[
    [1,1,2,34,43,43,54,35,4456,4,65,5,65,5],
    [345,4546,5,65,7,678,8,78,7,98,9,80,]
]

// // Dynamic Arrays Use any[] for arrays with unknown element types

let bom:any[]
bom=[23,'foe',8767,'mk',false,{a:'uy',b:0}]


// //  type in array


type VB=[string,number]
let nn:VB=['uiu',786]
console.log(179,nn[0]);




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
 

