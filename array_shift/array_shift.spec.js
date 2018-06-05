const insertShiftArray = require('./array_shift.js');

describe('add value to array and maintain lowest to highest order', () => {
  xit('by placing the value at index of 2 in the array', () => {
    let actual = insertShiftArray([2, 4, 6, 8], 5);
    let expected = [2, 4, 5, 6, 8];
    expect(actual).toEqual(expected);
  });

  xit('by placing the value at index of 3 in the array', () => {
    let actual = insertShiftArray([4, 8, 15, 23, 42], 16);
    let expected = [4, 8, 15, 16, 23, 42];
    expect(actual).toEqual(expected);
  });

  xit('by placing the value at the end of the array', () => {
    let actual = insertShiftArray([5, 10, 15, 20], 'test');
    let expected = [5, 10, 'test', 15, 20];
    expect(actual).toEqual(expected);
  });
});