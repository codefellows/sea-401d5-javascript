//iterative function to log values between min and max inclusive
function fnIter(min, max) {
  for (var i = min; i <= max; i++) {
    console.log('iter',i);
  }
}

fnIter(3, 5);


//recursive function to log values between min and max inclusive

function fnRecur(min, max) {
  if (min > max) return; //BASE  (A)
  console.log('recur',min); //ACTION  (B)

  fnRecur(min + 1, max); //RECURSIVE CALL (C)

  //what changes when the action follows the recursive call
  //console.log('recur',min);

  return; //FINAL RETURN not needed by implied if not supplied (D)
          //when you're logging you don't need to return a value
}

fnRecur(3, 5);
