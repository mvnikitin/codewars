const { assert } = require("chai")
const { solution } = require("../6kyu/multiplies-of3or5.js")
const { duplicateCount} = require("../6kyu/counting-duplicates.js")

function test(n, expected, func) {
    it(`n=${n}`, () => {
        let actual = func(n)
        assert.strictEqual(actual, expected)
    })
}

describe("counting duplicates", () => {
    test("abcde", 0, duplicateCount)
    test("aabbcde", 2, duplicateCount)
    test("aabBcde", 2, duplicateCount)
    test("indivisibility", 1, duplicateCount)
    test("Indivisibilities", 2, duplicateCount)
    test("aA11", 2, duplicateCount)
    test("ABBA", 2, duplicateCount)
    test("", 0, duplicateCount)
    test("abcc cdefccghijklc", 1, duplicateCount)
})

describe("multiplies of 3 or 5", function(){
    test(-1, 0, solution)
    test(0, 0, solution)
    test(1, 0, solution)
    test(2, 0, solution)
    test(3, 0, solution)
    test(4, 3, solution)
    test(5, 3, solution)
    test(6, 8, solution)
    test(7, 14, solution)
    test(8, 14, solution)
    test(9, 14, solution)
    test(10,23, solution)
})