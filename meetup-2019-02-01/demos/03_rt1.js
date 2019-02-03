"use strict";

const myself = {
    name: 'Roberto Serrano',
    age: 33,
    address: {
        street: 'Calle Robledo',
        city: 'Madrid'
    },
    state: {
        active: true,
        promo: false
    },
    balance: 100.0
};

const getUserBalance = user => {
    if (user.state.active) {
        user.state.active = false;
        return user.balance;
    } else {
        user.state.active = true;
        return -1.0;
    }
};

const oldUserBalance = getUserBalance(myself); // 100.0

const userMeanBalance1 = (oldUserBalance + getUserBalance(myself)) / 2.0; // 49.5

const userMeanBalance2 = (oldUserBalance + oldUserBalance) / 2.0; // 100.0

const userMeanBalance3 = (getUserBalance(myself) + getUserBalance(myself)) / 2.0; // 49.5

// oldUserBalance + oldUserBalance === getUserBalance(myself) + getUserBalance(myself)
