// console.log(global)
// const path=require('path');
// console.log(path.extname(__filename))
// fs: file system
const fs =require('fs');
// console.log(fs);
//les méthodes synch
// console.log("start");
// let data=fs.readFileSync("file.txt",{encoding:"utf8"});
// console.log(data);
// console.log("finish")
//les méthodes asynch
// var fs = require("fs");
// console.log("start");
// fs.readFile('file.txt',function(err,data){
//     if (err) return console.error(err);
//     console.log(data.toString);
// }
// );
// console.log("finish")
//os
const os=require('os');
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.totalmem())
console.log(os.freemem())
