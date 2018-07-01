'use strict';

const brackets = require('../lib/multi-bracket-validation.js');


describe('Multi-bracket-validation should', () => {


  it('return a boolean as a response', () => {
    expect(brackets('{}')).toBe(true);
    expect(brackets('}{')).toBe(false);
  });

  it('return true for the following scenarios', () => {
    expect(brackets('{}(){}')).toBe(true);
    expect(brackets('()[[Extra Characters]]')).toBe(true);
    expect(brackets('{}{Code}[Fellows](())')).toBe(true);
    expect(brackets('(){}[[]]')).toBe(true);
  });

  it('return false for the following scenarios', () => {
    expect(brackets('[({}]')).toBe(false);
    expect(brackets('(](')).toBe(false);
    expect(brackets('{}{Code[Fellows]()')).toBe(false);
    expect(brackets('})]{([')).toBe(false);
  });
});
