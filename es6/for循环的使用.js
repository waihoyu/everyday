/**
 * js for 循环的使用
 */

let data = { name: "Jim", age: 20 };
for (const iterator of Object.keys(data)) {
    console.log(iterator);
}

let temp = [1, 2, 3, 4, 5].filter(function(item) {
    if (item < 4) {
        return item;
    }
});
console.log(temp);