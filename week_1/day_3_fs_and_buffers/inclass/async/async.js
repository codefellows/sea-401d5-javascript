console.log('top of the file');


console.log('middle of the file');

// function errorThrower() {
//   innerError();
//   function innerError() {
//     throw new Error('error in Inner')
//   }
// }

process.nextTick(function asyncCallOne() {
  console.log('MIDDLE OF THE FILE?')
  function inAsync() {
    console.log('IN ASYNC')
    process.nextTick(function asyncCallTwo() {
      console.log('MORE ASYNC');
    })
  }
  inAsync()
})


console.log('bottom of the file');

