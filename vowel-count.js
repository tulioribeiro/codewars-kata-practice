const assert = require('node:assert')

/*
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 */

const getCount = str => str.match(/[aeiou]/gi, '')?.length || 0

const tests = [
  ['abracadabra', 5],
  ['Our passion for learning... is our tool for survival.', 18],
  ['Batata', 3],
  ['Tulio', 3],
  ['Pneumonoultramicroscopicsilicovolcanoconiosis', 20],
  ['ZXCVBNM', 0],
  ['BrtjhlyQwRtTTtFffGh', 0],
  ['', 0]
]

tests.forEach(([assertion, result]) =>
  assert.strictEqual(getCount(assertion), result)
)
