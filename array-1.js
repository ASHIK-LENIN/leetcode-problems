
// const arr = [1,2,3,4,5]

// let array = [];

// for(let i=0; i<arr.length;i++){

//     // array.push(arr[i] + 1)
//     // array[array.length] = arr[i] + 1;
//     // array[i] = arr[i] + 1

// }

// console.log(array);


// const map = function (arr, fn) {
//     let n = arr.length;
//     let res = new Array();

//     for (i = 0; i < n; i++) {
//         res[i] = fn(arr[i], i)
//     }
//     return res;
// }

// const number = [1, 2, 3, 4, 5];

// const addOne = (value, index) => {
//     return value + 1
// }

// const newArray = map(number,addOne);

// console.log(newArray)



const map = (arr, fn) => {
    let n = arr.length;

    let res = new Array;

    for (i = 0; i < n; i++) {
        res[i] = fn(arr[i], i);
    }
    return res;
}

const number = [1,2,3,4,5];

const sum = (value, index) =>{
    return value + index;
}

// console.log(map(number, sum));

const newArray = map(number, sum);

console.log(newArray)