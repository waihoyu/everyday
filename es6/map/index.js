const dogs = new Map();
dogs.set('snickers', 3);
dogs.set('Sunny', 2);
dogs.set('Hugo', 10);
dogs.forEach((value, key) => console.log(value + ' ' + key));
for (const [key, value] of dogs) {
    console.log(key + " " + value);
}
console.log('================');
// let a = 1;
// let b = 2;

// let c = 0;
// c = a;
// a = b;
// b = c;

// console.log(a + " " + b);

let a = 5;
let b = 6;

// a = a + b;
// b = a - b;
// a = a - b;
[b, a] = [a, b]

console.log(a + " " + b);