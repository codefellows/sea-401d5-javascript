"use strict";

function QueueProto() {
  var array = [];
  this.queue = array.push.bind(array);
  this.dequeue = array.shift.bind(array);
  this.hasNext = function() {
    return !!(array.length);
  }
}

var qp = new QueueProto();
console.log("QueueProto queue it up:",qp.queue(1));
console.log("QueueProto dequeue it:", qp.dequeue());
console.log("QueueProto should report false for has next:",qp.hasNext());
//------------------------------//

function Queue() {
  let array = [];
  let front = 0;

  this.queue = array.push.bind(array);
  this.dequeue = function() {
    let next = array[front];
    array[front] = null;
    front ++;
    return next;
  }
  this.hasNext = function() {
    return !!(array.length);
  }
}

var q = new Queue();
console.log("Queue queue it up:",q.queue(1));
console.log("Queue dequeue it:", q.dequeue(2));
console.log("Queue should report 'false' for has next:",q.hasNext());
