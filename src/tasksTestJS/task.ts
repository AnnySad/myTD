//1. функция принимает параметрам целые положительные числа (неопределенное кол-во)

export function sum(...numbers: Array<number>) {
    return numbers.reduce((acc, el) => acc + el)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b < c && b + c < a && c + a < b)
        if (a === b || b === c || c === a) {
            return "01"
        } else if (a === b && b === c && c === a) {
            return "10"
        } else {
            return "11"
        }
    return "00"
}

// 3. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае.



export const isSquareGreater = (areaCr: number, areaSq: number) =>
    (areaCr / areaSq <= Math.PI / 4) ? true : false


// 4. Функция принимает isEvenSumGreater параметром массив чисел.
// Если сумма чисел с чётным индексом больше суммы чисел с нечётными индексами,
// то функция возвращает true. В противном случае - false.
export function isEvenSumGreater(array: number[]) {
   /* let evenSum = 0
    let oddSum = 0
    for (let i=0; i < array.length; i++){
        if (i % 2 === 0|| i ===0) {
            evenSum += array[1]
        }
        else {oddSum += array[1]}
    }
    return evenSum > oddSum ? true : false
        }*/

        //2 variant
let evenSum = array.reduce(function (acc,current, index){
return index % 2 === 0 ? acc + current : acc})

let oddSum = array.reduce(function (acc,current,index){
    return index % 2 !== 0 ? acc + current : acc})
return evenSum > oddSum}

// 5. Функция принимает параметром целое число и возвращает
// сумму цифр этого числа
export function getSum(number: number):number {
    return number.toString()
        .split("")
        .reduce((acc, el) => acc + Number(el), 0)
}

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

export const getBanknoteList=(num:number): Array<number> =>{
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    return []
}
export const sumOfNum=(num:number)=>{
    let sum = 0
    for (let i=1; i <= num; i++){
        sum = sum + i
    }
    return sum
}
