function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  function lcm_more_than_two_numbers(arr) {
    return arr.reduce((acc, val) => lcm(acc, val));
  }
  
  // Sample usage
  console.log(lcm_more_than_two_numbers([100, 90, 80, 7]));   // 25200
  console.log(lcm_more_than_two_numbers([5, 10, 15, 25]));     // 150
  