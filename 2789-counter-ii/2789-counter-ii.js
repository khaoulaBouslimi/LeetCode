/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let curr = init;

    function increment(){                 //increases the current value by 1 and then returns it.
        return ++curr;
    }

    function reset(){                     //sets the current value to init and then returns it.
        curr = init;
        return curr;
    }

    function decrement(){
        return --curr;                   //reduces the current value by 1 and then returns it.
    }

    return {
        increment: increment,
        reset: reset,
        decrement: decrement
    };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */