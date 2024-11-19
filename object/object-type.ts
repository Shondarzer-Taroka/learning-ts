 type User={name:string,id:number,isAttendance:boolean}
 let users:User[]
 users=[]
 let user1:User
 user1={name:'Tolaiha',id:87698,isAttendance:false}

 users.push(user1)


 let user2:User
 user2={name:'Yousof',id:654,isAttendance:false}
 users.push(user2)

 let user3:User
 user3={name:'Lamiya',id:765869,isAttendance:true}
 users.push(user3)

//  for (const key in users) {
//      console.log(users[key].name);
     
//  }

 type RequestUser='GET' | 'POST'

    let getValue:RequestUser
    getValue='GET'

    console.log(getValue);

    function myRequest(a:RequestUser) {
        return a
    }

    console.log(myRequest('POST'));

     let T:RequestUser

     console.log();
     
    
    
 