'use strict';

const Merge = require('../lib/ll_merge.js');

xdescribe('Merge module', () => {

  xit('should combine 2 linked lists into one', () => {
    let listA = new Merge;
    listA.append(1);
    console.listA;

    let listB = new Merge;
    listB.append(2);
    // console.log(listB);

    listA.combine(listA, listB);

    let actual1 = listA.head.value;
    let actual2 = listA.head.next.value;

    let expected1 = 1;
    let expected2 = 2;

    expect(actual1).toBe(expected1);
    expect(actual2).toBe(expected2);
  });

  xit('should alternate values between the 2 when merged', () => {
    let actual = null;
    expect(actual).toBeNull();
  });

  xit('should continue list when no values exist for the other list', () => {
    let actual = null;
    expect(actual).toBeNull();
  });
});
