import {getBanknoteList, getSum, getTriangleType, isEvenSumGreater, isSquareGreater, sum, sumOfNum} from "./task";

test("get sum of numbers", () => {
    expect(sum(1,2,3,4,5)).toBe(15)
})

test("get Triangle Type", ()=> {
    expect(getTriangleType(1,1,1,)).toBe("10")
    expect(getTriangleType(3, 3, 2)).toBe("01")
    expect(getTriangleType(5,4,3)).toBe("11")
    expect(getTriangleType(10, 5,5)).toBe("00")
})

test("is Square Greater Than Circle", ()=> {
    const sCr = 3.14
    const sSq = 4
    const result = isSquareGreater(sCr, sSq)
    expect(result).toBe(true)
})

test("is Even Sum Greater", ()=> {
    expect(isEvenSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenSumGreater([100, 1, 200, 2])).toBe(true)
})


test("get sum", () => {
    expect(getSum(2000)).toBe(2)
    expect(getSum(9999)).toBe(36)
    expect(getSum(1111)).toBe(4)
})




test("get banknote list", ()=> {
    const result1500 = getBanknoteList(1500)
    const result123 = getBanknoteList(123)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result123[0]).toBe(100)
    expect(result123[1]).toBe(20)
    expect(result123[2]).toBe(2)
    expect(result123[3]).toBe(1)

})

test ('', ()=>{
    expect(sumOfNum(8)).toBe(36)
})
