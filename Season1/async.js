const fs=require('fs');
const https=require('https');
const { after } = require('node:test');

console.log("Hello World")

var a=10;
var b=20;

// Sync function

// Synchrnous function : will block the code execution of main thread : dont use it
fs.readFileSync('./file.txt','utf-8');
console.log("This will execute after the file is read");;

https.get('https://dummyjson.com/products/1',(res)=>{
    console.log("Fethcing data from dummyjson.com");
});

setTimeout(()=>{
    console.log("settimeout");
},5000)




// Async function
fs.readFile('./file.txt','utf-8',function(err,data){
    console.log(data);
});

function mutilply(a,b){
    res=a*b;
    return res;
}

var c=mutilply(a,b);
console.log(c);
