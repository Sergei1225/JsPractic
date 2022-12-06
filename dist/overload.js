"use strict";
// перегрузка функций 3.9
function overLoad(a, b) {
    return a + b;
}
function head(value) {
    // без any не работает
    if (Array.isArray(value))
        return value[0];
    else
        return value;
}
// тип выводится правильно
const boo = head([100]);
const noo = [100, 200, 300, [100, [200]]];
/// 3.11 оператор !
let someValue;
const param = 100;
if (param < 200)
    someValue = 'value';
// то есть я говорю что это будет точно
console.log(someValue.toLowerCase());
//// 4.2 Дженерики
// type SomeValue<T> = T[] | T;
function headOne(value) {
    if (Array.isArray(value))
        return value[0];
    else
        return value;
}
const booOne = headOne(200);
console.log(booOne);
