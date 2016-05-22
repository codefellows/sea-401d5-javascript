"use strict";

const Stack = require('./lib/Stack');
const Queue = require('./lib/Queue');
const DuplicateStacks = require('./lib/DuplicateStacks');


// let splitQueueOnToStacks = function(stack1, stack2, queue) {
//   while (queue.hasNext()) {
//     let dq1 = queue.dequeue();
//     let dq2 = queue.dequeue();
//     if (dq1 !== null) stack1.push(dq1); // if there's null due to different length stacks
//     if (dq2 !== null) stack2.push(dq2);
//   }
// }
//
// //assume that stacks do not contain null
// let equalStacks = function(stack1, stack2) {
//   console.log("before stack1:", stack1);
//   console.log("before stack2:", stack2);
//   let queue = new Queue();
//   let areEqual = true;
//   if (stack1.peek() === null && stack2.peek() === null) return true; //or NA
//   while (stack1.peek() !== null || stack2.peek() != null) {
//     let item1 = stack1.pop();
//     let item2 = stack2.pop();
//     if (item1 != item2) {
//       areEqual = false;
//     }
//     queue.enqueue(item1);
//     queue.enqueue(item2);
//   }
//
//
//
//   splitQueueOnToStacks(stack1, stack2, queue);
//
//
//   //now the stacks are upside down so load them back on the queue
//   while (stack1.peek() !== null || stack2.peek() != null) {
//     let item1 = stack1.pop();
//     let item2 = stack2.pop();
//     queue.enqueue(item1);
//     queue.enqueue(item2);
//   }
//
//   splitQueueOnToStacks(stack1, stack2, queue);
//   return areEqual;
// }


let stack1 = new Stack();
let stack2 = new Stack();


//load up stacks

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack2.push(1);
stack2.push(2);
stack2.push(3);
//stack2.push(4);

console.log("stacks are equal:", DuplicateStacks.equalStacks(stack1, stack2));
