'use strict';

function repeatedWord(str) {
  
  let cleanStr = str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');

  let arr = cleanStr.toLowerCase().split(' ');
  let temp = [];
  let tally = 0;

  for(let i = 0; i < arr.length; i++) {
    if(temp.length == 0) {
      temp.push(arr[i]);
    } else {
      for(let j = 0; j < temp.length; j++) {
        if(arr[i].replace(',', '') == temp[j].replace(',', '')) {
          tally++;
          if(tally === 2) {
            return arr[i];
          }
        } else {
          temp.push(arr[i]);
        }
      }
    }
  }

}


module.exports = repeatedWord;