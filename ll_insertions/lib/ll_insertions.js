'use strict';

class Insertions {
  //enter code here

  constructor() {
    this.head = null;
  }

  append(val) {
    const node = new Node(val);
    if(!this.head) {
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    this.head = node;
    return this;
  }

  appendBefore(val, newVal) {
    const node = new Node(newVal);
    if(this.head.value === val) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next.value !== val) {
      currentNode = currentNode.next;
      if(currentNode.value !== val && !currentNode.next) {
        throw new Error('Expected value does not exist');
      }
    }
    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }

  appendAfter(val, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    while(currentNode.value !== val) {
      currentNode= currentNode.next;
      if(currentNode.value !== val && !currentNode.next) {
        throw new Error('Expected value does not exist');
      }
    }
    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }
}


module.exports = Insertions;