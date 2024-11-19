
let func1:(name:string,age:number,roll:number,classes:string)=> string

func1=(name:string,age:number,roll:number,classes:string)=>{
return `${name},${age},${roll},${classes}`
}

let a=func1('Abir',22,12,'ten')
// console.log(a);
 let arr:string[]
 arr=['gsl','kl']
 console.log(arr);

 let arr1:Array<string>=['ahmad','mira','jabir']
 console.log(arr1);

 let arr2:Array<number>

 arr2=[4,65,7,8,89,9]

 let firstNumber:number=arr2[3]
 console.log(firstNumber);
 


 console.log(arr2[3]);
 
 
// type aliases

type Person={
    name:string,
    age:number
}
 type Contact={
    phone:number
    email:string
 }

 type Employe=Person & Contact

 let employe:Employe={
    name:'hamid',
    age:77,
    phone:87469867,
    email:'ihlkjhklj@gmail.com'
 }

 console.log(employe);
 console.log(employe.phone);
 

 
// interface 

  interface User{
    user:string,
   readonly age:number,
    mobile:number,
    address:string,
    hobby:string
  }

  let user:User={
    user:'bakir',
    age:9,
    mobile:8978768768,
    address:'oiu',
    hobby:'irrhjhkljfhj'
  }
  
//   console.log(user);

 interface ResultFunc{
(    studentName:string,
    id:string | number,
    roll:number,
    subjectName:string):string
 }

 let resulFunc:ResultFunc

 resulFunc=function(studentName:string,id:string|number,roll:number,subjectName:string){
    return `${studentName},${subjectName},${id}`
 }

console.log(resulFunc('haris',33,12,'history'));

interface HighestMark extends ResultFunc{
   (mark:number)
}

//  let num:HighestMark
//  num=function(studentName:string,id:string|number,roll:number,subjectName:string,mark:number){
//    return 'success'
//  }
// console.log(num('Bangla',9,1,'Bengali'));


 


  

