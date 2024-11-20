// // Basic Object Syntax

let myobj:{studentName:string,mobileNumber:number,studentID:string}
myobj={
    studentName:'khalki',
    mobileNumber:5467578687565,
    studentID:'khjh098ujhjhi'
}


// // object declare with type

type Myclass={
    class_name:string;
    class_id:number;
}

let myclass:Myclass={
    class_name:'hlk',
    class_id:657856
}

// //  object declare with interface

interface Persons{
    pname:string;
    pid:number;
    paddress:string,
    hobbis:string[],
    hn:[string,number]
}

let persons:Persons={
    pname:'hkh',
    pid:8767,
    paddress:'hioli',
    hobbis:['uyu','kjhjhj'],
    hn:['po',777]
}


interface Bolibom {
    name: string;
    age: number;
    email?: string; // Optional property
  }
  
  const person1: Bolibom = { name: "David", age: 35 };
  const person2: Bolibom = { name: "Eve", age: 28, email: "eve@example.com" };
  
console.log(person2);
