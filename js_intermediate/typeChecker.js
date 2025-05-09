function areTypesSame(...args) {
    if (args.length < 2) return true;
    const firstType = typeof args[0];
    return args.every(arg => typeof arg === firstType);
  }
 
  console.log(areTypesSame(1, 2, 3));         
  console.log(areTypesSame(1, '2', 3));       
  console.log(areTypesSame(true, false));   
  console.log(areTypesSame([], {}, null));    
  