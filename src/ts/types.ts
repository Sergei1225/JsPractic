/// 5.3

interface IStrings {
    [key: string]: string
}
interface INumbers {
    [key: string]: number
}

type MyRecords<T> = T extends string ? IStrings : INumbers;

type NewRecord = MyRecords<number>
type NewRecord2 = MyRecords<string>

const newObj: NewRecord = {
    age: 100,
    name: 200
}
const newObj2: NewRecord2 = {
    age: '100',
    name: '200'
}