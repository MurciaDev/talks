"use strict";

const Money = function(q) {
    let _balance = q;

    return {
        add: function(q) {
            _balance += q; // Función no pura !!!
            return this;
        },
        get balance() { return _balance; }
    };
};

const GoodMoney = function(q) {
    const _balance = q;

    return {
        add: function(q) { return new GoodMoney(_balance + q); },
        get balance() { return _balance; }
    };
};

// MUTABLE
var money1 = new Money(10.0);
var money2 = money1.add(5.0);

var sum1 = money2.add(20.0);  // 35
var sum2 = money2.add(20.0);  // 55

// MUTABLE SUSTITUCION
var money1 = new Money(10.0);

var sum1 = money1.add(5.0).add(20.0);  // 35
var sum2 = money1.add(5.0).add(20.0);  // 60

// INMUTABLE
var money1 = new GoodMoney(10.0);
var money2 = money1.add(5.0);

var sum1 = money2.add(20.0);  // 35
var sum2 = money2.add(20.0);  // 35

// INMUTABLE SUSTITUCION
var money1 = new GoodMoney(10.0);

var sum1 = money1.add(5.0).add(20.0);  // 35
var sum2 = money1.add(5.0).add(20.0);  // 35
