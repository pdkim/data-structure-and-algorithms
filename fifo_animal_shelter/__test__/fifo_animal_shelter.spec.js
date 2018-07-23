'use strict';

const Shelter = require('../lib/fifo_animal_shelter.js');

xdescribe('Animal shelter should', () => {

  it('add an animal to the end of the list', () => {
    
    let pen = new Shelter;
    pen.enqueue('Max', 'dog');
    pen.enqueue('Caesar', 'cat');

    expect(pen.head.name).toBe('Caesar');
  });

  it('remove the first animal in the list', () => {
    
    let pen = new Shelter;
    pen.enqueue('Max', 'dog');
    pen.enqueue('Caesar', 'cat');
    pen.enqueue('Dumbo', 'Elephant');
    pen.dequeue('bird');

    expect(pen.head.name).toBe('Dumbo');
  });

  it('remove the first animal that matches the preferred animal type', () => {
    
    let pen = new Shelter;
    pen.enqueue('Augustus', 'cat');
    pen.enqueue('Caesar', 'cat');
    pen.enqueue('Max', 'dog');
    console.log('pre pen', pen);
    pen.dequeue('cat');
    console.log('post pen', pen);

    expect(pen.head.name).toBe('Max');
    expect(pen.head.next.name).toBe('Augustus');
  });
});
