

// const arr = [21, 34, 4, 45, 2, 5, 6, 67];

// let n = arr.length;
// let filteredArr = [];

// for (i = 0; i < n; i++) {
//     if (arr[i] > 10) {
//         filteredArr[filteredArr.length] = arr[i]
//     }
// }

// console.log(filteredArr);

const filter = (arr, fn) => {
    let n = arr.length;

    let filterArr = new Array();

    for (i = 0; i < n; i++) {
        if (fn(arr[i], i)) {
            filterArr[filterArr.length] = arr[i];
            // filterArr.push(arr[i])
        }
    }
    return filterArr;
}

const array = [12, 34, 45, 23, 456, 89, 3, 67];

const filterFn = (val, index) => {
    return val > 20;
}

const filteredArray = filter(array,filterFn);

console.log(filteredArray);
