/**
 * es6的基础语法
 */
let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);

for (const num of mySet) {
    console.log(num);
}
mySet.has(Math.sqrt(25));
console.log(mySet.size);