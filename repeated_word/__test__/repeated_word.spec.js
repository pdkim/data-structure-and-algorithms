'use strict';

const repeatWord = require('../lib/repeated_word.js');
//console.log(name);

describe('Repeated word should', () => {

  it('return the word a.', () => {
    let str = 'Once upon a time, there was a brave princess who...';
    let actual = repeatWord(str);
    expect(actual).toBe('a');
  });

  it('return the word one.', () => {
    let str = 'one two one three';
    let actual = repeatWord(str);
    expect(actual).toBe('one');
  });

  it('return the word the', () => {
    let str = 'what in the world am I going to do with the world?';
    let actual = repeatWord(str);
    expect(actual).toBe('the');
  });
});
