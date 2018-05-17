// es6  set  去重 
const arr = [1, 2, 3, 4, 1, 4, 5, 3];
let set = new Set();
let set2 = new Set(arr);

if (!Array.isArray(arr)) {
    Array.from(arr).forEach(element => {
            set.add(element);
        })
        // 类数组for  of 
    console.log(set2);
}