// Module exports and require are used to create modules in Node.js. The module.exports is an object, which is the exposed interface to the module. require() function is used to import modules.
// It is a collection of code which is private to itself

const {CalculateSum} = require('./sum.js');
const {x} = require('./sum.js');
const data=require("./data.json")
// util
// const util=require("node:util")
var a=20
console.log(a)
var b=30
CalculateSum(a,b)
console.log(x)
// console.log(util)
// console.log(global)
console.log(data)