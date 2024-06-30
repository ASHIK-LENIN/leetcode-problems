
// let arr = [1, 2, 3, 4, 56, 66];

// let n = arr.length;

// let reducedVal = 0;

// for (i = 0; i < n; i++) {
//     reducedVal = arr[i] + reducedVal;

// }
// console.log(reducedVal);



const reduce = (num, fn, init) => {

    let n = arr.length;
    
    
    for (i = 0; i < n; i++) {
        init = fn(arr[i], i)
    }
    return init;
}