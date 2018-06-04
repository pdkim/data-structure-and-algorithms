'use strict';

const Insertions = require('../lib/ll_insertions.js');

const list = new Insertions();
list.append(1);
list.append(2);

describe('insertion should ', () => {

  xit('append a new node at the end of the list', () => {
    //first test
    list.append(3);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
    expect(list.head.next.next.next.value).toBeNull();
  });

  xit('append a new node before a specified node', () => {
    //second test
    list.append(3);
    list.appendBefore(2, 4);
    expect(list.head.value).toBe(4);
    expect(list.head.next.value).toBe(2);
  });

  xit('testing', () => {
    //third test
    list.append(3);
    list.appendAfter(2, 5);
    expect(list.next.value).toBe(5);
    expect(list.next.next.value).toBe(3);
  });
});
