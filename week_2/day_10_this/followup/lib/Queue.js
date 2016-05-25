
"use strict";

let Queue = function() {
  let array = [];
  let front = 0;
  let empty = true;

  this.enqueue = array.push.bind(array);
  this.dequeue = function() {
    let next = array[front];
    array[front] = null;
    front++;
    if (front === array.length) array = []; //queue cleanup

    return next;
  }
  this.hasNext = function() {
    //has next false if array is empty or front equals length of array
    return array.length === 0 ? false : (front === array.length ? false : true);
  }
  this.display = function() {
    return array;
  }
}
module.exports = Queue;
