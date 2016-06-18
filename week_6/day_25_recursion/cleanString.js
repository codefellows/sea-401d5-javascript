// remove all sequencial duplicate characters  
function cleanString(s) {
  if (s.length === 0 || s.length === 1) return s;
  if (s.charAt(0) === s.charAt(1)) return cleanString(s.substr(1));
  return s.substr(0, 1) + cleanString(s.substr(1));
}
var before = 'aabbcddad'; //abcdad
var after = cleanString(before);
console.log('before', before);
console.log('after',after);
