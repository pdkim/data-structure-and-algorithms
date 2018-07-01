const BinarySearch = require('./array_binary_search.js');

xdescribe('Return the index of the array element that matches the search word', () => {
  xit('return the index of the array element that matches the keyword value', () => {
    let actual = BinarySearch([4,8,15,16,23,42], 15);
    let expected = 2;
    expect(actual).toBe(expected);
  });

  xit('if search key is not listed in the array, return -1', () => {
    let actual = BinarySearch([11,22,33,44,55,66,77], 90);
    let expected = -1;
    expect(actual).toBe(expected);
  });
});