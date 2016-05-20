"use strict";

let fun = function(param1, param2) {
  console.log("this:", this);
  if (this && this.val) {
    console.log("val: ", this.val, "param1:", param1, "param2:", param2);
    this.val && console.log("fun:", param1 + param2 + this.val);
  } else {
    console.log("this is undefined");
  }
}
//
// console.log("call fun");
 //fun(5, 7);
//
// console.log("bind to fun and call:fun.bind({val: 3}, 5, 7)();");
// fun.bind({
//   val: 3
// }, 5, 7)();
//
console.log("call fun: fun.call({val:3}, 5, 7);");
fun.call({val:3}, 5, 7);

console.log("apply fun: fun.apply({val:3}, [5,7]);");
fun.apply({val:3}, [5,7]);
