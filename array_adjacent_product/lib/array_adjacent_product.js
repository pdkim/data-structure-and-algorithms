'use strict';

function LargestProduct(matrix) {
  let maxProduct = 0;
  const maxCol = matrix[0].length - 1;
  const maxRow = matrix.length - 1;

  for (let currentRow = 0; currentRow <= maxRow; currentRow++) {
    for (let currentCol = 0; currentRow <= maxCol; currentCol++) {

      let currentProduct = 0;

      let check = 0;

      let val = matrix[currentRow][currentCol];

      maxProduct = Math.max(maxProduct, currentProduct);

      //"East"
      if (typeof (matrix[currentRow][currentCol +1]) === 'number') {
        check = matrix[currentRow][currentCol + 1];
        currentProduct = val * check;
        if (maxProduct < currentProduct) {
          maxProduct = currentProduct;
        }
      }

      // "South"
      // if(typeof(matrix[currentRow + 1][currentCol]) === 'number') {
      //   check = matrix[currentRow + 1][currentCol];
      //   currentProduct = val * check;
      //   if(maxProduct < currentProduct) {
      //     maxProduct = currentProduct;
      //   }
      // }

      // "Southeast"
      // if(typeof(matrix[currentRow + 1][currentCol + 1]) === 'number') {
      //   check = matrix[currentRow + 1][currentCol + 1];
      //   currentProduct = val * check;
      //   if(maxProduct < currentProduct) {
      //     maxProduct = currentProduct;
      //   }
      // }

      // "Southwest"
      // if(typeof(matrix[currentRow - 1][currentCol - 1]) === 'number') {
      //   check = matrix[currentRow + 1][currentCol - 1];
      //   currentProduct = val * check;
      //   if(maxProduct < currentProduct) {
      //     maxProduct = currentProduct;
      //   }
      // }
    }
  }
  return maxProduct;
}


module.exports = LargestProduct;