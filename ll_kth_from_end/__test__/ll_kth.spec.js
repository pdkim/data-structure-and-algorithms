'use strict';

const kth = require('../lib/ll_kth.js');


const list = {
  head: {
    value: 1,
    next: {
      value: 3,
      next: {
        value: 8,
        next: {
          value: 2,
          next: null,
        },
      },
    },
  },
};

xdescribe('kth function should ', () => {

  it('find the second to last value', () => {
    //first test
    let actual = kth(list, 0);
    expect(actual).toBe(8);
  });

  xit('testing', () => {
    //second test
    let actual = kth(1, 2);
    let expected = list.head.next;
    expect(actual).toEqual(expected);
  });

  xit('testing', () => {
    //third test
  });
});
