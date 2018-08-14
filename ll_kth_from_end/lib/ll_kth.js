'use strict';

function kthElement(list, k) {
  if (!list || k < 0) {
    return 'Exception';
  }

  let endofLine = 0;
  let kthCurrent;
  let pushTo = [];
  
  doThis(list.head, pushTo);


  console.log(pushTo);

  for(let i = pushTo.length; i > pushTo - k; i--) {
    endofLine = pushTo[i];
  }

  kthCurrent = pushTo[endofLine - 2];

  return kthCurrent;
}


function doThis(node, arr) {
  while(node.next) {
    arr.push(node.value);
    node = node.next;
    doThis(node, arr);

    if(node.next === null) {
      break;
    }
  }
  return arr;
}

module.exports = kthElement;