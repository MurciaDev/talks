"use strict";

// Versión imperativa
const arr1 = [1, 2, 3];
const arr2 = [];

for(let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

// Versión declarativa
const arr3 = [1, 2, 3];
const arr4 = arr3.map(item => item * 2);
// [2, 4, 6]

// Filtro declarativo
arr1.filter(n => n > 1);
// [2, 3]

// Factoría de comparaciones, clausura
const greaterThan = n => {
    return m => m > n;
};

const greaterThan10 = greaterThan(10);

greaterThan10(12);
// true
