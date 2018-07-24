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

  breadthFirst() {
    let queue = [];
    let results = [];
    let currNode;

    queue.push(this.root);

    while(queue.length !== 0) {
      currNode = queue[0];
      results.push(currNode.value);

      if(currNode.left) {
        queue.push(currNode.left);
      }
      
      if(currNode.right) {
        queue.push(currNode.right);
      }
      queue.shift();
    }
    
    return results;
  }
}

module.exports = Tree;