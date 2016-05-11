function once(fn) {
  var called = false;
  return function() {
    if (called) return;
    called = true;
    fn();
  }
}


function greet() {
  console.log('hello');
}

var onceGreet = once(greet);

debugger;