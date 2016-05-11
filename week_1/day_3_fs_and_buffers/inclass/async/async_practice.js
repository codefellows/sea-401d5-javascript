function logOut() {
  console.log('ONE');
}

function logNine() {
  console.log('SEVEN');
}

function logTwo() {
  console.log('EIGHT');
}

process.nextTick(() => {
  process.nextTick(() => {
    console.log('TWO');
    process.nextTick(() => logOut());
  });
});

setTimeout(() => {
  process.nextTick(() => {
    logTwo();
  })
}, 0)

process.nextTick(() => {
  console.log('THREE');
  logTwo();
});

logOut();