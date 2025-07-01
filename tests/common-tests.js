const {assert} = require("chai");
const {multipliesThreeFive} = require("../6kyu/multiplies-of3or5.js");
const {duplicateCount} = require("../6kyu/counting-duplicates.js");
const {count} = require("../6kyu/count-characters-in-your-string.js");
const {arrayDiffRefactored} = require("../6kyu/array-diff");
const {cakes} = require("../6kyu/pete-the-baker");

function testStrict(n, expected, func) {
  it(`n=${n}`, () => {
    let actual = func(n);
    assert.strictEqual(actual, expected);
  });
}

function testStrictTwoArgs(n, m, expected, func) {
  it(`n=${n}, m=${m}`, () => {
    let actual = func(n, m);
    assert.strictEqual(actual, expected);
  });
}

function testDeep(n, expected, func) {
  it(`n=${n}`, () => {
    let actual = func(n);
    assert.deepEqual(actual, expected);
  })
}

function testDeepTwoArgs(n, m, expected, func) {
  it(`n=${n}, m=${m}`, () => {
    let actual = func(n, m);
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
  testStrict(-1, 0, multipliesThreeFive);
  testStrict(0, 0, multipliesThreeFive);
  testStrict(1, 0, multipliesThreeFive);
  testStrict(2, 0, multipliesThreeFive);
  testStrict(3, 0, multipliesThreeFive);
  testStrict(4, 3, multipliesThreeFive);
  testStrict(5, 3, multipliesThreeFive);
  testStrict(6, 8, multipliesThreeFive);
  testStrict(7, 14, multipliesThreeFive);
  testStrict(8, 14, multipliesThreeFive);
  testStrict(9, 14, multipliesThreeFive);
  testStrict(10, 23, multipliesThreeFive);
});

describe("count characters in string", function () {
  testDeep("habahaba", {h: 2, a: 4, b: 2}, count);
  testDeep('', {}, count)
  testDeep('ABCd', {A: 1, B: 1, C: 1, d: 1}, count)
  testDeep('abrAcadaBra', {a: 4, b: 1, r: 2, A: 1, c: 1, d: 1, B: 1}, count)
});


describe("array diff", function () {
  testDeepTwoArgs([1, 2], [2], [1], arrayDiffRefactored);
  testDeepTwoArgs([1, 2, 2], [1], [2, 2], arrayDiffRefactored);
  testDeepTwoArgs([1, 2, 2], [], [1, 2, 2], arrayDiffRefactored);
  testDeepTwoArgs([1, 2, 3], [1, 2], [3], arrayDiffRefactored);
});

describe("pete the baker", function () {
  testStrictTwoArgs({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}, 2, cakes)
  testStrictTwoArgs({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}, 0, cakes)
});
