// create your loops here.

//while loops
function whileLoop1() {
  const newArr = [];
  let index = 0;
  while (index < 10) {
    newArr.push(index);
    index++;
  }
  return newArr;
}
let whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  const newArr2 = [];
  let index = 0;
  while (index < 20) {
    newArr2.push(index);
    index += 2;
  }
  return newArr2;
}
let whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

// for loops
function forLoop1() {
  const newArr3 = [];
  for (i = 0; i <= 9; i++) {
    newArr3.push(i);
  }
  return newArr3;
}
const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (i = 100; i >= 0; i--) {
    console.log('Time to explosion: ' + i);
  }
}
forLoop2();

//for...in loops

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArr4 = [];
  for (const key in object) {
    newArr4.push(key);
  }
  return newArr4;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const newArr5 = [];
  for (const key in object) {
    newArr5.push(object[key]);
  }
  return newArr5;
}

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
