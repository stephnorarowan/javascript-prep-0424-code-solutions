function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumbersResult = addTwoNumbers(6, 8);
console.log('The sum of the addTwoNumbers exercise is:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(5);
console.log('The number of minutes is:', minutes);

function getGreeting(name) {
  return "What's up," + ' ' + name;
}

const greeting = getGreeting('Doc');
console.log('The greeting is:', greeting + '?');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const sumTimesFive = addAndMultiplyBy5(3, 4);
console.log('The sum is:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const productDividedByFive = multiplyAndDivideBy5(15, 29);
console.log('The sum is:', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const difference = subtractTwoNumbers(45, 18);
console.log('The difference is:', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const circumference = getCircleCircumference(15);
console.log('The circumference of the circle is:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Usagi', 'Tsukino');
console.log("The person's full name is:", fullName);

function cube(number) {
  return number * number;
}

const cubed = cube(7);
console.log('The cubed value is:', cubed);
