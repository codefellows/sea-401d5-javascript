'use strict';

//iterate hello

function helloIter(n) {
  for (let i = 0; i < n; i++) {
    console.log(i, 'Hello');
  }
}

helloIter(5);

function helloRecur(n,count) {
  if (n === 0) return;   //set base
  console.log(count, 'Hello'); //(A)
  helloRecur(--n, ++count);      //recur: new stack frameß
}

helloRecur(5,0);
