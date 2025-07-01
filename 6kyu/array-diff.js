// Implement a function that computes the difference between two lists. The function should remove all occurrences
// of elements from the first list (a) that are present in the second list (b). The order of elements in the first
// list should be preserved in the result.
// Examples
//
// If a = [1, 2] and b = [1], the result should be [2].
//
// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

function arrayDiff(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}

function arrayDiffRefactored(a, b) {
  return a.filter(item => !b.includes(item));
}

export { arrayDiffRefactored }
