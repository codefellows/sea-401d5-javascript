"use strict";

const Stack = require('./Stack');
const Queue = require('./Queue');


let splitQueueOnToStacks = function(stack1, stack2, queue) {
  while (queue.hasNext()) {
    let dq1 = queue.dequeue();
    let dq2 = queue.dequeue();
    if (dq1 !== null) stack1.push(dq1); // if there's null due to different length stacks
    if (dq2 !== null) stack2.push(dq2);
  }
}

//assume that stacks do not contain null
module.exports = {
  equalStacks: function(stack1, stack2) {
    let queue = new Queue();
    let areEqual = true;
    if (stack1.peek() === null && stack2.peek() === null) return true; //or NA
    while (stack1.peek() !== null || stack2.peek() != null) {
      let item1 = stack1.pop();
      let item2 = stack2.pop();
      if (item1 != item2) {
        areEqual = false;
      }
      queue.enqueue(item1);
      queue.enqueue(item2);
    }



    splitQueueOnToStacks(stack1, stack2, queue);


    //now the stacks are upside down so load them back on the queue
    while (stack1.peek() !== null || stack2.peek() != null) {
      let item1 = stack1.pop();
      let item2 = stack2.pop();
      queue.enqueue(item1);
      queue.enqueue(item2);
    }

    splitQueueOnToStacks(stack1, stack2, queue);
    return areEqual;
  }
}
