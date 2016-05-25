"use strict";
let Stack = function() {
  this._arr = []; //its not private but I'm using underscore to indicate private
  this.top = null;
  this.size = this._arr.length;
};

Stack.prototype.push = function(data) {
  this._arr[this.size] = data;
  this.size += 1;
  this.top = this._arr[this.size - 1];
};

Stack.prototype.pop = function() {
  let temp = this.top || null;  //deal with empty stack

  this.size = this.size === 0 ? 0 : --this.size;
  this.top = this.size === 0 ? null : this._arr[this.size - 1];

  //cleanup
  if (this.size === 0) this._arr = []; //stack cleanup

  return temp;
};

Stack.prototype.peek = function() {
  if (this.top) return this.top
  else return null;
}
Stack.prototype.display = function (){
  return this._arr;
}
module.exports = Stack;
