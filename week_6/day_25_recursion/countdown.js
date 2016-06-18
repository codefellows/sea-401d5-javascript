'use strict';

//iterate hello

function countdownIter(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}

countdownIter(5);

function countdownRecur(n) {
  if (n === 0) return;   //set base
  console.log(n); //(A)
  countdownRecur(n-1);      //recur: new stack frame

}

countdownRecur(5);
