"use strict";

const S = require('sanctuary');

const compose = f => g => x => f(g(x));

const addOneThenDouble = compose(x => x * 2)(x => x + 1);

console.log(addOneThenDouble(2));
// 6

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;
const shout = compose(exclaim)(toUpperCase);

console.log(shout('send in the clowns'));
// "SEND IN THE CLOWNS!"

const head = x => x[0];
const reverse = xs => S.reduce(acc => x => S.concat([x])(acc)) ([]) (xs);
const last = compose(head)(reverse);

const chuckMovements = ['jumpkick', 'roundhouse', 'uppercut'];

console.log(last(chuckMovements));
 // 'uppercut'

 const toUpperCaseLast1 = compose(toUpperCase)(compose(head)(reverse));

 const toUpperCaseLast2 = compose(compose(toUpperCase)(head))(reverse);

 console.log(toUpperCaseLast1(chuckMovements));
 console.log(toUpperCaseLast2(chuckMovements));
// toUpperCaseLast1 === toUpperCaseLast2
