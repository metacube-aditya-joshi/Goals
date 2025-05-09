function secondLowestGreatest(arr) {
    const sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
    if (sorted.length < 2) {
      return 'Not enough unique numbers.';
    }
    return [sorted[1], sorted[sorted.length - 2]];
  }
  
  console.log(secondLowestGreatest([1, 2, 3, 4, 5])); // Output: [2, 4]
  