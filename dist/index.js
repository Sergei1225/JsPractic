"use strict";
// asserts 
function assertsName(user) {
    if (!user.name) {
        throw new Error('user.name is undefined');
    }
}
function getName(user) {
    assertsName(user);
    console.log(user);
}
function isAnInternetOrder(order) {
    return !!order && "email" in order;
}
//   function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
//     return !!order && "callerNumber" in order  }
function isATelephoneOrder(order) {
    return order.callerNumber !== undefined;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
