// Write a generator function that returns a generator object which yields the fibonacci sequence.

// The fibonacci sequence is defined by the relation Xn = Xn - 1 + Xn - 2.

// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        console.log(a, [a, b], [a, a + b]);
        [a, b] = [b, a + b];
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

const gen = fibGenerator();
console.log(gen.next()); // 0
console.log(gen.next()); // 1
console.log(gen.next()); // 1
console.log(gen.next()); // 2
