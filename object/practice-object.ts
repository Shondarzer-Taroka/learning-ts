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

nmh.rweq=54

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

// // {}: Represents an object with no specific keys.
let rito:{};
rito={
    firstName:'hoja',
    lastName:'miya',
    age:223,
    jobtitle:'web developer'
}



// // Record<K, V>: Represents an object where keys (K) and values (V) follow specific types.

let pok:Record<number,(number|string|boolean)>

 pok={
    9:8,
    5:true,
    7:false
 }


 // // functions in Objects

 type Caleculator={
    add:(a:number,b:number)=> number;
    substruct: (c:number,d:number)=> number
 }

 let calculate:Caleculator={
    add:(a,b)=> a+b,
    substruct:(c, d) =>{
        return c-d
    },
 }

 
 interface ArrInt {
    a:string,b:number
 }
 
 let bvbv:ArrInt[]=[{a:'kjhjkh',b:90879879}]

// // index signature
 let yter:{[index:string]:number}={}

 yter.got=88

 console.log(nmh);
 


// console.log(calculate.add(66,88));
// console.log(calculate.substruct(89,76));
