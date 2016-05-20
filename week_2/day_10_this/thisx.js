
"use strict";

console.log("this",this);

let fun = function(city){

  console.log(this.name);
  console.log(city[0]);
}



fun.prototype.shout = function (){
  console.log(this.name.toUpperCase());
}

let funobj = new fun();

funobj.testme = function(){
  console.log("I don't this",this);
}


//funobj.shout.bind({name:"becky"})();

// fun.call({name:"becky"});
// funobj.shout.call({name:"becky"});

funobj.shout.apply({name:"becky"},["Seattle"]);

















//Object.create

// console.log("fun",fun());
//
// let funobj = new fun();
//
// console.log("new fun", funobj);
