// create your loops here.
function whileLoop1() {
  const newArray = [];
  let index = 0;
  while (index < 10) {
    newArray.push(index);
    index++;
  }
  return newArray;
}

const whileLoop1Result = whileLoop1();
console.log('WhileLoop1 output', whileLoop1Result);

function whileLoop2() {
  const newArray2 = [];
  let index = 0;
  while (index <= 18) {
    newArray2.push(index);
    index += 2;
  }
  return newArray2;
}

const whileLoop2Result = whileLoop2();
console.log('WhileLoop2 output', whileLoop2Result);

function forLoop1() {
  const newArray3 = [];
  for (let index = 0; index < 10; index++) {
    newArray3.push(index);
  }
  return newArray3;
}

const forLoop1Result = forLoop1();
console.log('forLoop1 output', forLoop1Result);

function forLoop2() {
  for (let index = 100; index >= 0; index--) {
    console.log('Time to explosion:' + ' ' + index);
  }
}
forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArray4 = [];
  for (const key in person) {
    newArray4.push(key);
  }
  return newArray4;
}
const forInLoop1Result = forInLoop1(person);
console.log('For in Loop 1 Output', forInLoop1Result);

function forInLoop2(object) {
  const newArray5 = [];
  for (const key in object) {
    newArray5.push(object[key]);
  }
  return newArray5;
}

const forInLoop2Result = forInLoop2(person);
console.log('For In Loop 2 Result', forInLoop2Result);

function forLoop22() {}
