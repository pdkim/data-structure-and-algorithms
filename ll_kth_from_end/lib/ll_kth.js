'use strict';

function kthElement(head, k) {
  if (!head || k < 0) {
    return 'Exception';
  }

  let current = head;
  let kthCurrent = head;

  for (let i = 0; i < k - 1; i++) {
    current = current.next;
    if (!current) {
      return undefined;
    }
  }

  while (typeof current.next !== 'undefined') {
    kthCurrent = kthCurrent.next;
    current = current.next;
  }

  return kthCurrent;
}


module.exports = kthElement;