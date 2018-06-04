'use strict';

const LargestProduct = require('../lib/array_adjacent_product.js');

describe('Lergest Product', () => {

  xit('should return highest product of adjacent numbers in the same row', () => {
    //first test
    let arr = [1, 2, 3];
    let actual = LargestProduct(arr);
    expect(actual).toBe(6);
  });

  xit('should return highest product of adjacent numbers in the same column', () => {
    //second test
    let arr = [
      [1],
      [2],
      [3],
    ];
    let actual = LargestProduct(arr);
    expect(actual).toBe(6);    
  });

  xit('should return highest product of adjacent numbers of diagonal numbers (South East)', () => {
    //third test
    let arr = [
      [1, 2],
      [5, 4],
      [3, 6],
    ];
    let actual = LargestProduct(arr);
    expect(actual).toBe(30);   
  });

  xit('should return highest product of adjacent numbers of diagonal numbers (South West)', () => {
    //third test
    let arr = [
      [1, 2],
      [4, 5],
      [6, 3],
    ];
    let actual = LargestProduct(arr);
    expect(actual).toBe(30);   
  });

  xit('should return highest product of adjacent numbers of diagonal numbers (South East)', () => {
    //third test
    let arr = [ 
      [ 1, 2, 1 ], 
      [ 2, 4, 2 ], 
      [ 3, 6, 8 ], 
      [ 7, 8, 1 ], 
    ];
    let actual = LargestProduct(arr);
    expect(actual).toBe(64);   
  });
});
