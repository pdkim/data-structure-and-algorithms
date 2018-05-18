const insertShiftArray = require('./array_shift.js');

describe('add value to array and maintain lowest to highest order', () => {
  it('by placing the value in the middle of the array', () => {
    let actual = insertShiftArray(3, [1, 2, 4, 5]);
    let expected = [1, 2, 3, 4, 5];
    expect(actual).toBe(expected);
  });

  it('by placing the value at the second [1] position in the array', () => {
    let actual = insertShiftArray(6, [3, 9, 12]);
    let expected = [3, 6, 9, 12];
    expect(actual).toBe(expected);
  });

  it('by placing the value at the end of the array', () => {
    let actual = insertShiftArray(25, [5, 10, 15, 20]);
    let expected = [5, 10, 15, 20, 25];
    expect(actual).toBe(expected);
  });
});