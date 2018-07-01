'use strict';

const List = require('../lib/ll_detect.js');

xdescribe('Detect module', () => {

  xit('should determine that a loop does not exist by returning false', () => {
    let newList = new List;
    newList.append(1);
    newList.append(2);
    newList.append(3);

    newList.detective();

    let actual = newList.detective();
    expect(actual).toBe(false);
  });

  xit('should determine loop exists and returns true', () => {
    let newList = new List;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.head.next.next.next = newList.head;

    newList.detective();

    let actual = newList.detective();

    expect(actual).toBe(true);
  });

  xit('i do not know', () => {
    let newList = new List;
    expect(newList.detective()).toBeNull();
  });
});
