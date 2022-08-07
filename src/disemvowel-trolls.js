const assert = require('node:assert')

/*
 * Trolls are attacking your comment section!
 * A common way to deal with this situation is to remove all of the vowels from
 * the trolls' comments, neutralizing the threat.
 *
 * Your task is to write a function that takes a string and return a new string
 * with all vowels removed.
 *
 * For example, the string "This website is for losers LOL!" would become
 * "Ths wbst s fr lsrs LL!".
 *
 * Note: for this kata y isn't considered a vowel.
 */

const disemvowel = str => str.replace(/[aeiou]/gi, '')

const tests = [
  ['This website is for losers LOL!', 'Ths wbst s fr lsrs LL!'],
  ['Batata', 'Btt'],
  ['Tulio', 'Tl'],
  [
    'Lorem ipsum dolor sit amet consectetur adipisicing',
    'Lrm psm dlr st mt cnscttr dpscng'
  ]
]

tests.forEach(([assertion, result]) =>
  assert.strictEqual(disemvowel(assertion), result)
)
