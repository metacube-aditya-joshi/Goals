function thousands_separators(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  
  console.log(thousands_separators(1000));      
  console.log(thousands_separators(10000.23));    
  console.log(thousands_separators(100000));      
  