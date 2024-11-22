
let firstName:unknown='hello'
let firstNameLength:number=( firstName as string).length
console.log(firstNameLength);

// // Using Angle Brackets Syntax

let secondName:unknown='boli bol'

let secondNameLength:number=(<string>firstName).length
// // Note: Avoid angle brackets (<type>) in JSX because they conflict with HTML.
// const input = document.getElementById('myInput') as HTMLInputElement
// input.value='alklk'

// // Narrowing a Union Type

function getLength(value:string|number):number {
    if ( typeof value==='string') {
        return (value as string).length;
    }

    return value.toString().length
}
console.log(getLength(1223344333));
