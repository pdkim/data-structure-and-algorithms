'use strict';

function towersOfHanoi(n, start, middle, end) {

  if (n > 0) {

    towersOfHanoi(n - 1, start, end, middle);

    console.log('Disc ' + n +

      ' from ' + start + ' to ' + end);

    towersOfHanoi(n - 1, middle, start, end);

  }
}


module.exports = towersOfHanoi;