'use strict';
function callOne() {
  return 'hello from call one';
}

function callTwo() {
  return 'hello from call two';
}

//one
console.log('one')

console.log(callOne());
console.log(callTwo());

//two
console.log('two')

let funcArr = [callTwo, callOne];

funcArr.forEach((f) => {
  console.log(f)
});

//three
console.log('three');

funcArr.push(callTwo);
funcArr.push(callTwo);
funcArr.push(callOne);

console.log(funcArr[2]());
console.log(funcArr[1]());
console.log(funcArr[funcArr.length - 1]());


//four

console.log('four');

let funcObj = {};

funcObj.propOne = {};

funcObj.propTwo = {};

funcObj.propOne.first = callTwo;
funcObj.propOne.second = callOne;
funcObj.propTwo.first = callOne;
funcObj.propTwo.second = callTwo;

console.log(funcObj.propTwo.first());
console.log(funcObj.propOne.second());
console.log(funcObj.propOne.second());

funcObj = {}

function route(base, sub, fn) {
  if (!fn) return funcObj[base][sub];

  if (!funcObj[base]) funcObj[base] = {};

  funcObj[base][sub] = fn;
};

route('GET', '/cat', () => {
  return callOne();
})

route('GET', '/dog', () => {
  return callTwo() + ' and this dog';
})

route('UNICORN', '/rainbow', () => {
  return callOne();
})

route('POST', '/note', () => {
  return callOne();
})

console.log(route('UNICORN', '/rainbow'));
console.log(route('GET', '/dog')());
console.log(route('GET', '/cat')());







