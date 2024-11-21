// // Basic Object Syntax

let myobj: { studentName: string, mobileNumber: number, studentID: string }
myobj = {
    studentName: 'khalki',
    mobileNumber: 5467578687565,
    studentID: 'khjh098ujhjhi'
}


// // object declare with type

type Myclass = {
    class_name: string;
    class_id: number;
}

let myclass: Myclass = {
    class_name: 'hlk',
    class_id: 657856
}

// //  object declare with interface

interface Persons {
    pname: string;
    pid: number;
    paddress: string,
    hobbis: string[],
    hn: [string, number]
}

let persons: Persons = {
    pname: 'hkh',
    pid: 8767,
    paddress: 'hioli',
    hobbis: ['uyu', 'kjhjhj'],
    hn: ['po', 777]
}


interface Bolibom {
    name: string;
    age: number;
    email?: string; // Optional property
}

const person1: Bolibom = { name: "David", age: 35 };
const person2: Bolibom = { name: "Eve", age: 28, email: "eve@example.com" };


interface lpop {
    readonly id: number;
    name: string;
}

const person: lpop = { id: 1, name: "Alice" };

// person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property


// //  index signature

type DynamicSignature = {
    [key: string]: number
}


let nmh: DynamicSignature = {
    hjj: 88,
    her: 989,
}

// // Nested Objects

interface Address {
    city: string;
    id: number
}

interface Holibn {
    holyName: string;
    holyID: number;
    address: Address,
    tr:Uoler
}

let gy: Holibn = {
    holyName: 'Bolin',
    holyID: 999978898,
    address: {
        city: 'yytytg',
        id: 87678678
    },
    tr:{
        gh:'dddd',
        fg:9898,
        bg:{
            a:'ss',
            b:true
        }
    }
}



type Ry = {
    a: string
    b: boolean
}


type Uoler = {
    gh: string;
    fg: number;
    bg: Ry
}


let vc: Uoler = {
    gh: 'err',
    fg: 87668,
    bg: {
        a: 'iououy',
        b:false
    }
}



// // Object Type vs. object Type

// let rito:{
//     firstName:string;
//     lastName:string;
//     age:number;
//     jobtitle:string,
   
// };
let rito:object;
rito={
    firstName:'hoja',
    lastName:'miya',
    age:223,
    jobtitle:'web developer'
}



console.log(rito);
