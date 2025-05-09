function sumByIndex(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];
  
    for (let i = 0; i < maxLength; i++) {
      const val1 = arr1[i] || 0;
      const val2 = arr2[i] || 0;
      result.push(val1 + val2);
    }
  
    return result;
  }
  
  // Sample usage
  console.log(sumByIndex([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13])); // [4, 5, 8, 10, 12, 13]
  