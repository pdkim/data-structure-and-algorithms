'use strict';

const Node = require('./node.js');

class Insertions {

  constructor() {
    this.root = null;
  }

  append(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      let node = this.root;

      while (node.next) {
        node = node.next;
      }
      node.next = new Node(value);
    }
  }

  appendBefore(value, newVal) {
    let node = new Node(newVal);

    let currentNode = this.root;

    if (this.root.value === value) {
      this.root = node;
      this.root.next = currentNode;
      return;
    }

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    node.next = currentNode.next;
    currentNode.next = node;
  }

  appendAfter(value, newVal) {
    
    let node = new Node(newVal);

    let currentNode = this.root;

    while(currentNode) {

      if (currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
    }

    currentNode = currentNode.next;
  }
}


module.exports = Insertions;