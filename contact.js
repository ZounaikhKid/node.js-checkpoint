const uuid =require('uuid');
// console.log(uuid)
const users =[
    {
        name:"zounaikha",
        age:25,
        id:uuid.v4()
    },
    {
        name:"beya" ,
        age:18 ,
        id:uuid.v4()
    },
    {
        name:"chayma" ,
        age:23 ,
        id:uuid.v4()
    },
    {
        name:"mhamed" ,
        age:24 ,
        id:uuid.v4()
    },
];
// console.log(users);
// console.log(users.find((user)=>user.name=="zounaik"));
// console.log(users.length)
// console.log(users.map((el)=>el.age).reduce((acc,curr)=>(acc+curr))/users.length)
module.exports=users
// console.log(module);