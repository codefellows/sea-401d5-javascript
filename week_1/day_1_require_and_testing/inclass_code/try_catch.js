try {
  throw new Error('DANGERDANGERDANGER');
} catch(e) {
  console.dir(e);
}

console.log('made it');