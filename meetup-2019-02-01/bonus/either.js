"use strict";

const S = require('sanctuary');
const m = require('moment');

const getAge = S.curry2((now, user) => {
    const birthDate = m(user.birthDate, 'YYYY-MM-DD');

    return birthDate.isValid()
        ? S.Right(now.diff(birthDate, 'years'))     // Number
        : S.Left('Birth date could not be parsed'); // String
});

const fortune = S.pipe([
    S.add(1),
    S.show,   // Conversión a String
    S.concat('If you survive, you will be ')
]);

const zoltar = S.pipe([
    getAge(m()),
    S.map(fortune),
    S.map(console.log)
]);

zoltar({ birthDate: '1985-10-27' });

zoltar({ birthDate: 'balloons!' });