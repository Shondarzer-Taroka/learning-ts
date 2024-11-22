/*
Type aliases in TypeScript allow you to define a custom name for a type,
which can represent a primitive, object, array, function, or even other types.
It’s like creating a shorthand or a new name for a type to make your code 
more readable and reusable.
*/


// Using Type Aliases for Primitives

type Poi=string
type Age=number
let age:Age=888787
let gh:Poi='kkkk'
console.log(age);

// // Type Aliases for Objects

type User={
    a:string;
    b:number
    c:boolean
}

let user:User={
    a:'homan',
    b:7676,
    c:false
}

// // Type Aliases for Arrays

type Trillio=string[]
let res:Trillio=[
    'sdf',
    'tro',
    'wer',
    'sfd'
]


// // Type Aliases for Functions


  type GetName=(name:string,age:number)=> string|number

  let getName:GetName=(name,age)=> name+age


  // //  Using Type Aliases with Union Types

  type ID=string|number

  let id:ID=9888


  type Users = { name: string; email: string ; huy:boolean};
type Admin = { name: string; role: string };

let person: Users | Admin;

// person = { name: "Alice", email: "alice@example.com" }; // Valid
person = { name: "Bob", role: "Administrator" };       // Valid
// person = { name: "Charlie" };                       // Error: Property 'email' or 'role' is missing
person={name:'dd',email:'dd',role:'ff',huy:false}
console.log(person);




