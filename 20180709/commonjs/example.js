//example.js
var n = 1;
function sayHello( name ){
    var name = name || "Tom";
    return "Hello~"+name
}
function addFn(val){
    var val = val.x+val.y;
    return val
}
module.exports ={
    n:n,
    sayHello:sayHello,
    addFn:addFn
}