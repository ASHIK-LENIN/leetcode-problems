

// function createHelloWorld (){

//     function string (){
//         console.log("Hello world!")
//     }

// return string
// }

// const f = createHelloWorld();

// f();


function createHelloWorld (){
    return  function (){
        return "Hello World"
        
    }
}

const print = createHelloWorld()

console.log(print())