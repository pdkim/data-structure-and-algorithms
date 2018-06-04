'use strict';

const Insertions = require('../lib/ll_insertions.js');

const list = new Insertions();

describe('insertion should ', () => {

  it('append a new node at the end of the list', () => {
    //first test
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.root.value).toEqual(1);
    expect(list.root.next.value).toEqual(2);
    expect(list.root.next.next.value).toEqual(3);
  });

  it('append a new node before a specified node', () => {
    //second test
    list.append(1);
    list.append(2);
    list.append(3);
    list.appendBefore(2, 4);
    expect(list.root.next.value).toEqual(4);
    expect(list.root.next.next.value).toEqual(2);
  });

  xit('testing', () => {
    //third test
    list.append(1);
    list.append(2);
    list.append(3);
    list.appendAfter(2, 5);
    console.log(list);
    expect(list.root.next.next.value).toEqual(5);
    expect(list.root.next.next.next.value).toEqual(3);
  });
});
