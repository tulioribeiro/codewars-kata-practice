const assert = require('node:assert')

/*
 * Your task is to make two functions ( max and min, or maximum and minimum,
 * etc., depending on the language ) that receive a list of integers as input,
 * and return the largest and lowest number in that list, respectively.
 */

const min = list => {
  return Math.min(...list)
  // same as:
  // return Math.min.apply(null, list)
}

const max = list => {
  return Math.max(...list)
  // same as:
  // return Math.max.apply(null, list)
}

const testsMin = [
  [[4, 8, 15, 16, 23, 42], 4], // the famous lost numbers
  [[1, 2, 3, 4, 5, 6], 1],
  [[1, 2, 3, 4, -5, 6], -5],
  [[4, -5, -Infinity], -Infinity]
]

const testsMax = [
  [[4, 8, 15, 16, 23, 42], 42], // the famous lost numbers
  [[1, 2, 3, 4, 5, 6], 6],
  [[1000, 10000, -10, 50, 45], 10000],
  [[-1423423, 4, 9328923849, Infinity], Infinity]
]

testsMin.forEach(([assertion, result]) =>
  assert.strictEqual(min(assertion), result)
)

testsMax.forEach(([assertion, result]) =>
  assert.strictEqual(max(assertion), result)
)
