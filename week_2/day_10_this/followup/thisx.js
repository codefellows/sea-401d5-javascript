
"use strict";

console.log("this when running code",this);

let fun = function(city){
  console.log(this.name);
  console.log(city);
  return "done";
}

fun.prototype.shout = function (){
  console.log(this.name.toUpperCase());
}

//console.log("execute with no bind and no params => error:",fun());
console.log("bind and execute no params:",fun.bind({name:'becky'})());
console.log("bind and execute with params:",fun.bind({name:'becky'})('Seattle'));

console.log("call with no params", fun.call({name:'becky'}));
console.log("call with params", fun.call({name:'becky'},'Seattle'));

console.log("apply with no params", fun.apply({name:'becky'}));
console.log("apply with params", fun.apply({name:'becky'},['Seattle']));

//
let funobj = new fun();
console.log(funobj.__proto__)
//you have applied 'this' to the prototype but it difficult to console
//log elements of the prototype.  To see them you can use the node inspector
//debugger to see the __proto__ object and you will see 'this' underscore
//the constructor and shout attached directly.  I'm including a picture of
//in this folder of what I see when I do this - see view-of-proto...md markdown

 //
// let funobj = new fun();
//
// funobj.testme = function(){
//   console.log("I don't this",this);
// }
//
//
// //funobj.shout.bind({name:"becky"})();
//
// // fun.call({name:"becky"});
// // funobj.shout.call({name:"becky"});
//
// funobj.shout.apply({name:"becky"},["Seattle"]);
//
//
//
//
//
//
//
//
//








//Object.create

// console.log("fun",fun());
//
// let funobj = new fun();
//
// console.log("new fun", funobj);
