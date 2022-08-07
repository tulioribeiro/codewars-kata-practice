const assert = require('node:assert')

/*
 * Given a month as an integer from 1 to 12, return to which quarter of the year
 * it belongs as an integer number.
 *
 * For example: month 2 (February), is part of the first quarter; month 6
 * (June), is part of the second quarter; and month 11 (November), is part of
 * the fourth quarter.
 */

const quarterOf = month => Math.ceil(month / 3)

assert.strictEqual(quarterOf(1), 1)
assert.strictEqual(quarterOf(2), 1)
assert.strictEqual(quarterOf(3), 1)
assert.strictEqual(quarterOf(4), 2)
assert.strictEqual(quarterOf(5), 2)
assert.strictEqual(quarterOf(6), 2)
assert.strictEqual(quarterOf(7), 3)
assert.strictEqual(quarterOf(8), 3)
assert.strictEqual(quarterOf(9), 3)
assert.strictEqual(quarterOf(10), 4)
assert.strictEqual(quarterOf(11), 4)
assert.strictEqual(quarterOf(12), 4)
