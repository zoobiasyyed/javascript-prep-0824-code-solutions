// addTwoNumbers
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(3, 4);
console.log(sum);

//convertHoursToMinutes

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(5);
console.log(minutes);

//getGreeting

function getGreeting(name) {
  return 'Hello, ' + name;
}

greeting = getGreeting('World');
console.log(greeting);

//addAndMultiplyBy5
function addAndMultiplyBy5(num1, num2) {
  num3 = num1 + num2;
  return num3 * 5;
}

const sumTimesFive = addAndMultiplyBy5(4, 7);
console.log(sumTimesFive);

//multiplyAndDivideBy5
function multiplyAndDivideBy5(num1, num2) {
  num3 = num1 * num2;
  return num3 / 5;
}
const productDividedByFive = multiplyAndDivideBy5(300, 745);
console.log(productDividedByFive);

//subtractTwoNumbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(50, 30);
console.log(difference);

//getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}
circumference = getCircleCircumference(7);
console.log(circumference);

//getFullName
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Zoobia', 'Syyed');
console.log(fullName);

//cube
function cube(number) {
  return number ** 3;
}
const cubed = cube(3);
console.log(cubed);
