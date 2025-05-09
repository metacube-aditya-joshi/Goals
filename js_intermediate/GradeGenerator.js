const students = {
    David: 80,
    Vinoth: 77,
    Divya: 88,
    Ishitha: 95,
    Thomas: 68
  };
  
  function computeAverageAndGrade(students) {
    const marks = Object.values(students);
    const average = marks.reduce((a, b) => a + b, 0) / marks.length;
  
    let grade = '';
    if (average < 60) grade = 'F';
    else if (average < 70) grade = 'D';
    else if (average < 80) grade = 'C';
    else if (average < 90) grade = 'B';
    else grade = 'A';
  
    console.log(`Average Marks: ${average.toFixed(2)}\nGrade: ${grade}`);
  }
  

  computeAverageAndGrade(students);
  