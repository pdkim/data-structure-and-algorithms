'use strict';

const hanoi = require('../lib/towers-of-hanoi.js');


describe('Towers of Hanoi should', () => {

  xit('only move one value at a time', () => {
    
    let expected = 'Disc 1 from A to C';
    expect(hanoi(1, 'A', 'B', 'C')).toBe(expected);
  });

  xit('ensure bigger values cannot be moved over a smaller one', () => {
    hanoi(3, 'A', 'B', 'C');

    expect(null).toBeNull();
  });

  xit('should move all values to column c', () => {
    hanoi(2, 'A', 'B', 'C');

    expect(null).toBeNull;
  });
});
