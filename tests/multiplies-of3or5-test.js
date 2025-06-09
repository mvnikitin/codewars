const { assert } = require("chai")
const { solution } = require("../6kyu/multiplies-of3or5.js")

function test(n, expected) {
    it(`n=${n}`, () => {
        let actual = solution(n)
        assert.strictEqual(actual, expected)
    })
}

describe("basic tests", function(){
    test(-1, 0)
    test(0, 0)
    test(1, 0)
    test(2, 0)
    test(3, 0)
    test(4, 3)
    test(5, 3)
    test(6, 8)
    test(7, 14)
    test(8, 14)
    test(9, 14)
    test(10,23)
})