"use strict";

function addOnlyIf(f, x, y) {
    if (f(x) && f(y)) {
        return x + y;
    } else {
        return NaN;
    }
};

function isEven(x) {
    return x % 2 === 0;
};

const result = addOnlyIf(isEven, 2, 4);
// 6

const keepHighest = (x, y) => (x >= y ? x : y);

const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);
