// This is Immediate Invoked Function Expression (IIFE)
(function(module,require){
      // All the module code here
      //keeps the variables out of the global scope and made then private
      var x = 10;
})();

console.log("settimeout");

// This is the code executed in js thru libuv...................
setTimeout(function(){
    console.log("hi amm"); 
},1000);
console.log("settimeout to run"); 
// module and require are passed as arguments to the IIFE