function isPalindrome(str){
  if (!str || str.length < 2) return true;
  if (str.charAt(0).toLowerCase() === str.charAt(str.length -1).toLowerCase()){
    return isPalindrome(str.substr(1, str.length -2));
  } else {
    return false;
  }
}
console.log('palindrone','abccba', isPalindrome('abccba'));
console.log('palindrone','abcdba', isPalindrome('abcdba'));
