
let firstName: unknown = 'hello'
let firstNameLength: number = (firstName as string).length
console.log(firstNameLength);

// // Using Angle Brackets Syntax

let secondName: unknown = 'boli bol'

let secondNameLength: number = (<string>firstName).length
// // Note: Avoid angle brackets (<type>) in JSX because they conflict with HTML.
// const input = document.getElementById('myInput') as HTMLInputElement
// input.value='alklk'

// // Narrowing a Union Type

function getLength(value: string | number): number {
    if (typeof value === 'string') {
        return (value as string).length;
    }

    return value.toString().length
}

// //  Casting vs Type Assertions

let ret: unknown = 123
console.log((ret as string).length);

interface Wer {
    a: string,
    b: number
}

let wer = {} as Wer

wer.a='ksdf'
wer.b=656


// //  Casting for Arrays

let ghopi:unknown=['77','tre','yop']

let grip:string[]=ghopi as string[]
grip.push('wert')


// // Force Casting (unknown to Any Type)

let value: unknown = "Hello!";
let valuelength = (value as unknown as number); // Force casting

console.log(valuelength,'54'); // Compiles but results in incorrect behavior

console.log(grip);


console.log(wer);


console.log(getLength(1223344333));
