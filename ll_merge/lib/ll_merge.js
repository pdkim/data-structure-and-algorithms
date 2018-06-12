'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class Merge {
  constructor() {
    this.head = null,
    this.foot = null,
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.foot = node;
    }
    else {
      this.foot.next = node;
      node.previous = this.foot;
      this.foot = node;

    }
  }

  combine(listA, listB) {
    let currNode = listA.head;
    for(let i = 0; i < listB.length; i++) {
      let nextNode = currNode.next;
      currNode.next = listB[i];
      currNode = currNode.next;
      currNode.next = nextNode;
      currNode = currNode.next;
    }
    return listA;
  }
}


module.exports = Merge;