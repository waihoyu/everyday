let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.reduce((prev, next, index) => {
    // console.log(prev);
    // console.log(next);
    // console.log(index);
    return prev + next;
}));