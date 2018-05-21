function insertShiftArray(arr, x) {
  let halfway = round(arr.length / 2);
  arr.length++;
  for(let i = arr.length -1; i > halfway; i--) {
    arr[i] = arr[i-1];
  }
  arr[halfway] = x;
  return arr;
}

function round(x) {
  if(x % 1 !== 0) {
    x = x + .5;
  }
  return x;
}


module.exports = insertShiftArray;