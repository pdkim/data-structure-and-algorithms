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

  findMaxValue() {
    let maxVal = 0;

    let traverse = (node) => {
      if(node.left) {
        traverse(node.left);
      }
      if(node.right) {
        traverse(node.right);
      }
      maxVal = node.value > maxVal ? node.value: maxVal;
    };

    traverse(this.root);
    return maxVal;
  }
}

module.exports = Tree;