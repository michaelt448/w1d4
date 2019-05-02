var words = ["ground", "control", "to", "major", "tom"];


const map = function(array, aFunction) {
  modifiedArray = [];
  array.forEach(function(string) {
    modifiedArray.push(aFunction(string));
  })
  return modifiedArray;
}

console.log(map(words, function(word) {
  return word.length;
}));
console.log(map(words, function(word) {
  return word.toUpperCase();
}));
console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));