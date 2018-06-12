'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class hasLoop {
  constructor() {
    this.head = null;
    this.foot = null;
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.foot = node;
    }
    else {
      this.foot.next = node;
      this.foot = node;
    }
  }

  detective() {
    let check1 = this.head;
    let check2 = this.head;
    let looping = false;
    let endLoop = 0;

    while(check2.next.next || endLoop === this.length) {
      check1 = check1.next;
      check2 = check2.next.next;
      endLoop++;

      if(check2 === check1) {
        looping = true;
        break;
      }
      else{looping = false;}
    }
    return looping;
  }

}


module.exports = hasLoop;