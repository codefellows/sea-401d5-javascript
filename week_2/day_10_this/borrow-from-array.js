//http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
var anArrayLikeObj = {
  0: "Martin",
  1: 78,
  2: 67,
  3: ["Letta", "Marieta", "Pauline"],
  length: 4
};
console.log("object", anArrayLikeObj);
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
console.log(newArray);
//
console.log("indexOf");
console.log(Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true); // true​
//
// console.log("reverse");
// console.log(Array.prototype.reverse.call(anArrayLikeObj));
//
// console.log("pop");
// console.log(Array.prototype.pop.call(anArrayLikeObj));
// console.log(anArrayLikeObj);
//
// console.log("push");
// console.log(Array.prototype.push.call(anArrayLikeObj, "Jackie"));
// console.log(anArrayLikeObj);
