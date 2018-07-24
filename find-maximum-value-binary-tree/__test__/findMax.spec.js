'use strict';

const Tree = require('../lib/findMax.js');

xdescribe('Find max module should return', () => {

  it('the root value as the max value', () => {
    let tree = new Tree;
    tree.add(10);
    tree.add(5);
    tree.add(3);

    let actual = tree.findMaxValue();

    expect(actual).toBe(10);
  });

  it('13 as the max value', () => {
    let tree = new Tree;
    tree.add(10);
    tree.add(13);
    tree.add(12);

    let actual = tree.findMaxValue();

    expect(actual).toBe(13);
  });

  it('15 as the max value', () => {
    let tree = new Tree;
    tree.add(10);
    tree.add(12);
    tree.add(15);

    let actual = tree.findMaxValue();

    expect(actual).toBe(15);
  });
});
