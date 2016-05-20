"use strict";
var anotherUser = {
  data : [{
    name: "Samantha",
    age: 12
  }, {
    name: "Alexis",
    age: 14
  }]
}
var user = {
  // local data variable​
  data: [{
    name: "T. Woods",
    age: 37
  }, {
    name: "P. Mickelson",
    age: 43
  }],
  reportData: function(){
    this.data.forEach((item)=>{
      console.log(item);
    });
  }
}
user.reportData();
user.reportData.call(anotherUser);
