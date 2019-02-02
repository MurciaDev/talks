"use strict";

const i = require('immutable');

const myself = {
    name: 'Roberto Serrano',
    age: 33,
    address: {
        street: 'Calle Robledo',
        city: 'Madrid'
    },
    state: {
        active: true
    },
    balance: 1985.86
};

// Primer intento, Object.freeze()
Object.freeze(myself);

// YEAAAAAAAH (nop)
// myself.balance = 69385.32;

// Freeze no funciona para los objetos anidados 🤔
myself.address.city = 'Alicante';

myself.address.city;
// Alicante...

// Segundo intento, librería immutable.js
const safeMyself = i.fromJS(myself);

// Actualización inmutable, devuelve otro objeto
const myselfClone = safeMyself.updateIn(['address', 'city'], _ => 'Murcia');

// La mutación no ha afectado al objeto original
safeMyself.getIn(['address', 'city']);
// Alicante

// Tenemos una copia con la ciudad cambiada
myselfClone.getIn(['address', 'city']);
// Murcia
