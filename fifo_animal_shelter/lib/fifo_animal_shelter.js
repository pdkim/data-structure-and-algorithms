'use strict';

class Node {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.next = null;
  }
}

class AnimalShelter {

  constructor() {
    this.head = null;
    this.foot = null;
    this.next = null;
  }

  enqueue(name, type) {

    let node = new Node(name, type);

    if (!this.head) {
      this.head = node;
      this.foot = node;
    }

    let prevHead = this.head;
    this.head = node;
    node.next = prevHead;
  }


  dequeue(pref) {

    let currNode = this.head;
    let preNode = this.head;
    let futureNode = currNode.next;

    while (currNode.next) {
      if (currNode.type === pref) {
        currNode.next = null;
        preNode.next = futureNode;
        return preNode.name;
      }
      preNode.next = futureNode;
      return currNode.name;
    }
    if (currNode.next === null) {
      return currNode.name;
    }
    else {
      preNode = currNode;
      // console.log('prenode is ', preNode);
      currNode = currNode.next;
      // console.log('curr node is', currNode);
      futureNode = currNode.next;
      // console.log('future is ', futureNode);
    }
  }
}



module.exports = AnimalShelter;