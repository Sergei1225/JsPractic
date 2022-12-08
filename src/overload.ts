// перегрузка функций 3.9

function overLoad(a: string, b: string): string;
function overLoad(a: string, b: undefined): string;
function overLoad(a: any, b: any): any {
    return a + b;
}
// реализация идет последней

// задача сиз урока 3.9

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
    // без any не работает
    if (Array.isArray(value)) return value[0];
    else return value;
}
// тип выводится правильно
const boo = head([100]);

// рекурсивные типы 3.10

type ArrSome = number | ArrSome[];

const noo: ArrSome = [100, 200, 300, [100, [200]]];

/// создавая такой объект мы имеем ввиду что JSONValue может быть любым из них
type JSONPrimitive = string | number | null | boolean;
type JSONObj = { [key: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObj | JSONArray;

/// 3.11 оператор !

let someValue: string | undefined;
const param: number = 100;

if (param < 200) someValue = "value";

// то есть я говорю что это будет точно
console.log(someValue!.toLowerCase());

//// 4.2 Дженерики

// type SomeValue<T> = T[] | T;

function headOne<T>(value: T[] | T): T {
    if (Array.isArray(value)) return value[0];
    else return value;
}

const booOne: number = headOne(200);

console.log(booOne);

/// задача из 4.3

// function append(el, list) {
//     return list.concat(el)
// }
function append<T>(el: T, list: T[]): T[] {
    return list.concat(el);
}

/// 4.5 keyof

type NewCar = {
    year: number;
    brand: string;
};

type CoolCar = keyof NewCar;

const myCar: CoolCar = "year"; // yaer | brand имеем дело с ключами

/// 4.6 Сужение значений
function goog<T, U extends keyof T>(el: U, list: T): T[U] {
    return list[el];
}

/// задачи 4.6

export function keys<T extends object>(obj: T): Array<keyof T> {
    const currentKeys = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }

    return currentKeys;
}

export function values<T extends object>(obj: T): Array<T[keyof T]> {
    const currentValues = [];

    for (let key in obj) {
        currentValues.push(obj[key]);
    }

    return currentValues;
}

/// задачи 4.8

export function createMap<T>(list: T[]) {
    return function <U>(cb: (x: T) => U): U[] {
        const result = [];

        for (let el of list) {
            result.push(cb(el));
        }

        return result;
    };
}

const voo = createMap([2, 2, 1]);
const voo2 = voo((res) => res + 2);

const booHoo = <T>(n: T): string[] => {
    const arr = [];
    arr.push(n + 'dsds')
    return arr
}

type SeType = typeof booHoo;

console.log(voo2)

