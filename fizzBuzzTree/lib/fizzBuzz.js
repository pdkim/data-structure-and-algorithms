'use strict';

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {

  constructor() {
    this.root = null;
  }

  //add
  add(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
    }

    else {
      this.addNode(this.root, node);
    }
  }

  addNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      }
      else {
        this.addNode(root.left, node);
      }
    }
    else {
      if (root.right === null) {
        root.right = node;
      }
      else {
        this.addNode(root.right, node);
      }
    }
  }

  static fizzBuzzTree(tree) {
    function traverse(node) {
      if(node) {
        if(node.left !== null) {
          traverse(node.left);
        }

        checker(node);

        if(node.right !== null) {
          traverse(node.right);
        }
      }
    }

    function checker(node) {
      if(node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = 'FizzBuzz';
      }
      else if(node.value % 5 === 0) {
        node.value = 'Buzz';
      }
      else if(node.value % 3 === 0) {
        node.value = 'Fizz';
      }
      return tree;
    }

    traverse(tree.root);
  }
}

module.exports = Tree;