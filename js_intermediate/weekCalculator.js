function ISO_numeric_date(dt) {
    const day = dt.getDay();
    return day === 0 ? 7 : day;
  }
  

  const dt = new Date(2015, 10, 1); 
  console.log(ISO_numeric_date(dt));
  