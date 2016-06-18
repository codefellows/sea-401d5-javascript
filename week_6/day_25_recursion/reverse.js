function reverse(str) {
  if (str.length <= 1) return str;
  //"abc"
  return str.substr(str.length - 1) + reverse(str.substr(0, str.length - 1));

}

console.log('abc','-reversed-',reverse('abc'));

//just reverse half the string
function reverseOptimal(str) {
  if (str && str.length <= 1) return str;
  //"abc"
  return str.substr(str.length - 1) + reverse(str.substr(1, str.length - 2)) + str.substr(0,1);

}

console.log('abc','-optimal reversed-',reverseOptimal('abcd'));
