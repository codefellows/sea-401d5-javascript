'use strict';

const firstPromise = new Promise((resolve, reject) => {
  setTimeout((err) => {
    if (err) return reject(err);
    resolve('data we waited for');
  }, 500);
});

firstPromise.then((data) => {
  throw Error('error in first then');
  return data;
}).then((data) => {
  console.log(data.toUpperCase())
})
.catch((err) => {
  console.log(err);
});

debugger;