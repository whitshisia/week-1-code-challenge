const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter student\'s marks (0-100):', (studentMarks) => {
  const marks = parseInt(studentMarks);

  if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    let grade;
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60) {
      grade = 'B';
    } else if (marks >= 50) {
      grade = 'C';
    } else if (marks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }

    console.log(`Grade: ${grade}`);
  } else {
    console.log('Invalid input. Please enter a number between 0 and 100.');
  }

  rl.close();
});