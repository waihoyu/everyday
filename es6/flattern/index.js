const array = [1, 2, [3, 4],
    [5, [6, 7]]
];

const _ = require('lodash');
const a = _.flatten(array);

console.log();
console.log(_.flatten(a));

// array.forEach(function flattern(element) {
//     // console.log(element instanceof Array);
//     if (element instanceof Array) {
//         flattern(element);
//     } else {
//         console.log(element);
//         return;
//     }
// });

// function flattern(arr) {
//     if (arr) {
//     }
// }

// 1. flattern 功能以后慢慢学
// 2. 数组的一些超纲但常用 ，npm 包提供了这种功能
// lodash underscore 
// 3. 代码的宿主环境是 命令行 
// 4. npm init -y package.json 
// 5. yarn add lodash
// 6. 在当前文件中，引入node_modules下的lodash
// 7. 使用它完成 flattern,看文档
//    const arr = [1,2,[3,4], [5,[6,7]]];

function flatten(arr) {
    return arr.reduce(function(prev, next) {
        console.log(prev, next);
    }, [])
}

console.log(flatten([1, 2, [3, 4],
    [5, [6, 7]]
]));