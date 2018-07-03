'use strict';

'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.head = null;
    this.next = null;
    this.foot = null;
  }

  push(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.foot = node;
    }
    let prevHead = this.head;
    this.head = node;
    node.next = prevHead;
  }

  
  pop() {
    if(!this.head) {
      return 'Bad Request';
    }

    let currNode = this.foot;

    
    let prevHead = currNode.value;
    this.head = this.head.next;
    return prevHead;
  }


  enqueue(value) {
    return this.push(value);
  }

  dequeue() {

    let currNode = this.head;

    if (!currNode) {
      return 'Bad Request';
    }

    while (!currNode.next) {
      currNode = currNode.next;

      if(currNode.next === null) {
        let headVal = currNode.value;
        currNode = null;
        return headVal;
      }
    }
  }


}

module.exports = Queue;