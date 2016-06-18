'use strict';


function nSquared(n){
  return n*n;
}

function nProcessed(n){
  console.log ('n =', n, 'n**2=',nSquared(n));
}

nProcessed(5);
