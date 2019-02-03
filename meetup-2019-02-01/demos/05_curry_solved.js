"use strict";

const addOnlyIf = f => x => y => {
    if (f(x) && f(y)) {
        return x + y;
    } else {
        return NaN;
    }
};

function isEven(x) {
    return x % 2 === 0;
};

const addEvens = addOnlyIf(isEven);

const result = addEvens(2)(4);
// 6

const keepHighest = (x, y) => (x >= y ? x : y);

const max0 = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);

// Eliminar xs
const max1 = reduce((acc, x) => (x >= acc ? x : acc), -Infinity);

// Sustituir ternaria por función
const max2 = reduce((acc, x) => keepHighest(acc, x), -Infinity);

// La función ya tiene como entrada una tupla de dos argumentos
const max3 = reduce(keepHighest, -Infinity);
// max0 ==== max3
