let students:object[]
students=[]
let obj:object
obj={studentName:'fahim',id:232324}

 let classStudent:{
    studentName:string,
    id:number,
    isAttendance:boolean
 }
 classStudent={studentName:'Hamid',id:8878,isAttendance:true}
 let student1:{studentName:string,id:number,isAttendance:boolean}
 student1={studentName:'Galib',id:9000,isAttendance:false}
 students.push(student1)
 console.log(students);
 
 console.log(classStudent);
 console.log(classStudent.studentName);
 console.log(classStudent['id']);
 
 
 
console.log(obj);
console.log(obj['id']);

