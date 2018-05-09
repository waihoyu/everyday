const arr = [1, 2, 3, 4, 1, 4, 5, 3];
const arr2 = [];


function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log("type error")
        return;
    } else {
        arr.forEach(element => {
            if (arr2.indexOf(element) < 0) {
                arr2.push(element)
            }
        })
    }
    return arr2;
}

console.log(unique(arr));