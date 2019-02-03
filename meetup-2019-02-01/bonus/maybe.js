"use strict";

const S = require('sanctuary');
const $ = require ('sanctuary-def');

const theUsers = { Bob: 30, Saffron: 33 };

const getNextAge = name => {
    // Type is number | undefined
    const maybeAge = theUsers[name];
    // Type is number | undefined
    const maybeNextAge = maybeAge !== undefined
        ? maybeAge + 1
        : undefined;
    // Type is string
    const message = maybeNextAge !== undefined
        ? `${name}’s next age is ${maybeNextAge}`
        : 'No age';
    return message;
};

const findValueByName = S.get (S.is ($.Number)); // Nos da totalidad

const nextAge = age => age + 1;

const formatNameAge = name => age => `${name}’s next age is ${age}`;

const maybeUserNextAge = name =>
    S.pipe([
        findValueByName(name),
        S.map(nextAge),
        S.map(formatNameAge(name))
    ]);

const getUserAgeMessage = name => users =>
    S.fromMaybe('No age')(maybeUserNextAge(name)(users))

console.log(getUserAgeMessage('Bob')(theUsers));
