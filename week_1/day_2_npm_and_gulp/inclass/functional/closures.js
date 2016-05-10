
function createCounter() {
  var count = 0;
  return function() {
    console.log(++count);
  }
}



var counter = createCounter();

counter();
counter();
counter();
counter();


function createMultiplier(multiplier) {
  return function(val) {
    console.log(multiplier * val);
  }
}

const timesTen = createMultiplier(10);
const timesThree = createMultiplier(3);

function PrivateCounter() {
  var count = 0;

  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  }
}


debugger;
