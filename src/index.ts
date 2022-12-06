// asserts 

type User = {
    name: string,
    age: number
}
type UserAS = {
    name: string,
    age: number
}
type UserASD = {
    name: string,
    age: number
}

function assertsName (user: User): asserts user is User & {name: string} {
    if(!user.name) {
        throw new Error('user.name is undefined')
    }
}

function getName (user: User): void{
    assertsName(user);
    console.log(user)
}

// выдаёт ошибку только при компиляции
//getName({name: '100', age: 200});

/// typeguards

/// функции которые проверяют принадлежность к конкретному типу

interface Order {
    address: string;
  }
  interface TelephoneOrder extends Order {
    callerNumber: string;
  }
  interface InternetOrder extends Order {
    email: string;
  }
  
  type PossibleOrders = TelephoneOrder | InternetOrder | undefined;
  
  function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
    return !!order && "email" in order;
  }
  
//   function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
//     return !!order && "callerNumber" in order  }

  function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
    return (order as TelephoneOrder).callerNumber !== undefined; 
}
  
  function makeOrder(order: PossibleOrders) {
    if (isAnInternetOrder(order)) {
      console.log(order.email);
    } else if (isATelephoneOrder(order)) {
      console.log(order.callerNumber);
    }
  }






