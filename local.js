//find user by name
const getUser=(arr,serchedname) =>{
   if (arr.filter((user)=>user.name==serchedname).length) {
       return arr.find((user)=>user.name==serchedname)
   } else {
       return ("not user")
   }
};
//moyen age
const getAvereageAge = (arr) => {
    return arr.map((el)=>el.age).reduce((acc,curr)=>(acc+curr))/arr.length
}
module.exports={getUser,getAvereageAge};