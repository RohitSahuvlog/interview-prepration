/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let c = init;
    return {
        increment: () => {
            return ++c;
        },
        reset: () => {
            return c = init;
        },
        decrement: () => {
            return --c;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5);
console.log(counter.increment()); // 6