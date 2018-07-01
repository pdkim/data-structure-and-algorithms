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

xdescribe('this is hard', () => {

  xit('testing', () => {
    //first test
    let actual = kth(1, 0);
    console.log(actual);
    let expected = list.head.next.next.next;
    console.log(expected);
    expect(actual).toEqual(expected);
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
