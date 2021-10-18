// #todo

'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * Determines if two values have different truthiness.
 *
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const differentTruthiness = (a, b) => {
  return Boolean(a) !== Boolean(b);
};

// --- test cases ---

const _1_expect = true;
const _1_actual = differentTruthiness('', '     ');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = differentTruthiness(NaN, 'NaN');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = differentTruthiness(true, false);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = differentTruthiness(NaN, NaN);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = differentTruthiness('', 0);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = differentTruthiness(1, true);
console.assert(_6_actual === _6_expect, 'Test 6');
