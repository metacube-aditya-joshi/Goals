function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return result.concat(left, right);
  }
  
  
  console.log(mergeSort([34, 7, 23, 32, 5, 62])); // [5, 7, 23, 32, 34, 62]
  