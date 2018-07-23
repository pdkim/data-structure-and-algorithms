'use strict';

const Tree = require('../lib/fizzBuzz.js');

xdescribe('FizzBuzz module should ', () => {

  it('change any value divided by 3 and 5 to FizzBuzz', () => {
    let tree = new Tree;
    tree.add(12);
    tree.add(15);
    tree.add(9);

    Tree.fizzBuzzTree(tree);

    expect(tree.root.right.value).toBe('FizzBuzz');
  });

  it('change any value divided by 5 to Buzz', () => {
    let tree = new Tree;
    tree.add(12);
    tree.add(20);
    tree.add(9);

    Tree.fizzBuzzTree(tree);

    expect(tree.root.right.value).toBe('Buzz');
  });

  it('change any value divided by 3 to Fizz', () => {
    let tree = new Tree;
    tree.add(8);
    tree.add(12);
    tree.add(3);

    Tree.fizzBuzzTree(tree);

    expect(tree.root.left.value).toBe('Fizz');
    expect(tree.root.right.value).toBe('Fizz');
  });

  it('not change any value that is not the above criterias', () => {
    let tree = new Tree;
    tree.add(8);
    tree.add(11);
    tree.add(4);

    Tree.fizzBuzzTree(tree);

    expect(tree.root.value).toBe(8);
    expect(tree.root.left.value).toBe(4);
    expect(tree.root.right.value).toBe(11);
  });
});
