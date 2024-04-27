/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

const isAdultResult = isAdult(100);
console.log('The person is an adult:', isAdultResult);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}

const didStudentPassResult = didStudentPass(90);
console.log('Did the student pass?', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score <= 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}

const gradeCalculatorResult = gradeCalculator(105);
console.log("The student's grade is:", gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'It is hot today.';
  } else if (season === 'spring') {
    return 'The flowers are blooming.';
  } else if (season === 'autumn') {
    return 'The leaves are changing colors.';
  } else if (season === 'winter') {
    return 'It is cold today.';
  } else {
    return 'Please enter a valid season.';
  }
}

const seasonMessengerResult = seasonMessenger('winter');
console.log('Go outside!', seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'Have a good weekend!';
  } else {
    return 'It is a weekday!';
  }
}

const dayDetectorResult = dayDetector('Monday');
console.log('What day is it?', dayDetectorResult);
