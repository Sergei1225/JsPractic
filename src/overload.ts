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
type JSONObj = { [key: string]: JSONValue }
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObj | JSONArray;

/// 3.11 оператор !

let someValue: string | undefined;
const param: number = 100;

if( param < 200 ) someValue = 'value';

// то есть я говорю что это будет точно
console.log(someValue!.toLowerCase())

//// 4.2 Дженерики

// type SomeValue<T> = T[] | T;

function headOne<T>(value: T[] | T):T {
    if (Array.isArray(value)) return value[0];
    else return value;
}

const booOne: number = headOne(200);

console.log(booOne)






