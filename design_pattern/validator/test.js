let d = [1, 2, 3];
let array = [];

let aa = function test(a, b, c) {
    console.log(a + b + c);
}

array.push(function() {
    return aa.apply(this, d);
});
array.forEach(element => {
    element();
});