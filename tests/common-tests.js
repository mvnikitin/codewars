const { assert } = require("chai");
const { solution } = require("../6kyu/multiplies-of3or5.js");
const { duplicateCount } = require("../6kyu/counting-duplicates.js");
const { count } = require("../6kyu/count-characters-in-your-string.js");

function testStrict(n, expected, func) {
  it(`n=${n}`, () => {
    let actual = func(n);
    assert.strictEqual(actual, expected);
  });
}

function testDeep(n, expected, func) {
  it(`n=${n}`, () => {
    let actual = func(n);
    assert.deepEqual(actual, expected);
  })
}

describe("counting duplicates", () => {
  testStrict("abcde", 0, duplicateCount);
  testStrict("aabbcde", 2, duplicateCount);
  testStrict("aabBcde", 2, duplicateCount);
  testStrict("indivisibility", 1, duplicateCount);
  testStrict("Indivisibilities", 2, duplicateCount);
  testStrict("aA11", 2, duplicateCount);
  testStrict("ABBA", 2, duplicateCount);
  testStrict("", 0, duplicateCount);
  testStrict("abcc cdefccghijklc", 1, duplicateCount);
});

describe("multiplies of 3 or 5", function () {
  testStrict(-1, 0, solution);
  testStrict(0, 0, solution);
  testStrict(1, 0, solution);
  testStrict(2, 0, solution);
  testStrict(3, 0, solution);
  testStrict(4, 3, solution);
  testStrict(5, 3, solution);
  testStrict(6, 8, solution);
  testStrict(7, 14, solution);
  testStrict(8, 14, solution);
  testStrict(9, 14, solution);
  testStrict(10, 23, solution);
});

describe("count characters in string", function () {
  testDeep("habahaba", { h: 2, a: 4, b: 2 }, count);
  testDeep('', {}, count)
  testDeep('ABCd', {A: 1, B: 1, C: 1, d: 1}, count)
  testDeep('abrAcadaBra', {a: 4, b: 1, r: 2, A: 1, c: 1, d: 1, B: 1}, count)
});
