const assert = require('node:assert')

/*
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
 * anything but exactly 4 digits or exactly 6 digits.
 *
 * If the function is passed a valid PIN string, return true, else return false.
 */

const validatePIN = pin => /^\d{4}(?:\d{2})?$/.test(pin)

const tests = [
  ['1234', true],
  ['123456', true],
  ['9999', true],
  ['999900', true],
  ['0987', true],
  ['098765', true],
  ['1', false],
  ['12', false],
  ['123', false],
  ['12345', false],
  ['1234567', false],
  ['111a', false],
  ['a111', false],
  ['11111a', false],
  ['a11111', false],
  ['-111', false],
  ['0.11', false]
]

tests.forEach(([assertion, result]) =>
  assert.equal(validatePIN(assertion), result)
)
