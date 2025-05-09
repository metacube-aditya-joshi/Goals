function all_properties(obj) {
    const properties = new Set();
    let current = obj;
  
    while (current) {
      Object.getOwnPropertyNames(current).forEach(prop => properties.add(prop));
      current = Object.getPrototypeOf(current);
    }
  
    return [...properties];
  }
  
  // Test
  console.log(all_properties(Array));
  