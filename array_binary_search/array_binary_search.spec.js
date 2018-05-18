const BinarySearch = require('./array_binary_search.js');

describe('Return the index of the array element that matches the search word', () => {
  it('return the index of the array element that matches the keyword value', () => {
    let actual = BinarySearch([1, 2, 3, 4], 3);
    let expected = 2;
    expect(actual).toBe(expected);
  });

  it('if search key is not listed in the array, return -1', () => {
    let actual = BinarySearch([1, 2, 3, 4], 'Wrong!');
    let expected = -1;
    expect(actual).toBe(expected);
  });
});