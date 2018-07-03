'use strict';


const queue = require('../lib/queue_w_stacks.js');

xdescribe('Queue module should', () => {

  it('add an element to the front of the list', () => {

    let list = new queue;
    list.push(1);
    expect(list.head.value).toBe(1);

    list.enqueue(2);
    expect(list.head.value).toBe(2);
  });

  it('remove the last element in the list', () => {
    
    let list = new queue;
    list.push(1);
    list.push(2);

    expect(list.head.next.value).toBe(1);
    list.dequeue();
    expect(list.head.next.value).toBeNull;
  });
});