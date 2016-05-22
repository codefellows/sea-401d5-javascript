"use strict";

const Stack = require('./lib/Stack');
const Queue = require('./lib/Queue');

//refactor for reuse
let splitQueueOnToStacks = function(stack1, stack2, queue) {
  //stack1, stack2 and queue are changed in this function
  while (queue.hasNext()) {
    let dq1 = queue.dequeue();
    let dq2 = queue.dequeue();
    if (dq1 !== null) stack1.push(dq1); // if there's null due to different length stacks
    if (dq2 !== null) stack2.push(dq2);
  }
}

//assume that stack do not contain null
let equalStacks = function(stack1, stack2) {
  console.log("before stack1:", stack1);
  console.log("before stack2:", stack2);
  let queue = new Queue();
  let areEqual = true; //default is that they are ßequal
  if (stack1.peek() === null && stack2.peek() === null) return true; //or NA
  while (stack1.peek() !== null || stack2.peek() != null) {

    let item1 = stack1.pop();
    let item2 = stack2.pop();
    if (item1 != item2) {
      areEqual = false;
    }
    //if one stack is bigger than the other nulls will be queued
    queue.enqueue(item1); //note that stack1's value is put on first so will come off first
    queue.enqueue(item2);
  }
  console.log("after test queue:", queue.display());
  console.log("after test stack1:", stack1);
  console.log("after test stack2:", stack2);

  //at this point both stacks are empty so load them up backwards
  //but don't push null
  splitQueueOnToStacks(stack1, stack2, queue);
  // while (queue.hasNext()) {
  //   let dq1 = queue.dequeue();
  //   let dq2 = queue.dequeue();
  //   if (dq1 !== null) stack1.push(dq1); // if there's null due to different length stacks
  //   if (dq2 !== null) stack2.push(dq2);
  // }
  // console.log("after 1st transfer stack1:", stack1);
  // console.log("after 1st transfer stack2:", stack2);

  //now the stacks are upside down so load them back on the queue
  while (stack1.peek() !== null || stack2.peek() != null) {
    let item1 = stack1.pop();
    let item2 = stack2.pop();
    //if one stack is bigger than the other nulls will be queued
    queue.enqueue(item1); //note that stack1's value is put on first so will come off first
    queue.enqueue(item2);
  }
  console.log("after flip queue:", queue.display());

  //at this point both stacks are empty so load them up in the right diretion
  //but don't push null
  splitQueueOnToStacks(stack1, stack2, queue);
  // while (queue.hasNext()) {
  //   let dq1 = queue.dequeue();
  //   let dq2 = queue.dequeue();
  //   if (dq1 !== null) stack1.push(dq1); // if there's null due to different length stacks
  //   if (dq2 !== null) stack2.push(dq2);
  //   console.log("after 2nd transfer stack1:", stack1);
  //   console.log("afte 2nd transfer stack2:", stack2);
  //   //console.log(item1, item2);
  //
  // }
  return areEqual;
}


let stack1 = new Stack();
let stack2 = new Stack();


//load up stacks
// stack1.push(1);
// stack1.push(2);
// stack1.push(3);
// stack1.push(4);
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log("stack1", stack1);
// stack1.pop();
// stack1.pop();
// stack1.pop();
// stack1.pop();
// console.log("stack1",stack1);

console.log("stacks are equal:", equalStacks(stack1, stack2));



//console.log("stack peek",stack.peek());

// queue.enqueue(1);
// queue.enqueue(2);
// console.log("q has next", queue.hasNext());
// queue.dequeue();
// queue.dequeue();
// console.log("q has next", queue.hasNext());
