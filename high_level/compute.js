function add(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function compute(a, b, fn) {
    return fn(a, b);
}
//函数过去，函数名代表函数
console.log(compute(1, 2, divide));