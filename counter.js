
// function counter(n){

//     return function(){
//         return n++
//     }
// }

// const print = counter(10)

// console.log(print());
// console.log(print());
// console.log(print());
// console.log(print());
// console.log(print());

const counter = (n) =>{

    return ()=> n++
    
}

const print = counter(10)

console.log(print())
console.log(print())
console.log(print())