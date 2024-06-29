

const createCounter = (init) => {

   let temp = init;

    function increment() {
        return ++init;
    }

    function reset() {

        return init;
    }

    function decrement() {
        init = temp
        return --init;
    }

   
    return {
        increment,
        decrement,
        reset
    }

}

const consol = createCounter(10)

console.log(consol.decrement())
console.log(consol.decrement())
console.log(consol.decrement())
console.log(consol.increment())
console.log(consol.reset())

