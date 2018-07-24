'use strict';

const Tree = require('../lib/breadth-first.js');

describe('Breadth first module should', () => {

  it('should print value of the root', () => {
    let tree = new Tree;

    tree.add(10);

    let actual = tree.breadthFirst();

    expect(actual).toEqual([10]);
  });

  it('should print value of root and left', () => {
    let tree = new Tree;

    tree.add(10);
    tree.add(5);

    let actual = tree.breadthFirst();

    expect(actual).toEqual([10, 5]);
  });

  it('should print values of root, left, and right', () => {
    let tree = new Tree;

    tree.add(10);
    tree.add(5);
    tree.add(15);

    let actual = tree.breadthFirst();

    expect(actual).toEqual([10, 5, 15]);
  });
});
