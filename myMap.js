var myMap = function(arr, condition) {
  var resultant = [];

  arr.forEach( function(cell) {
    resultant.push(condition(cell));
  });
  //console.log(resultant);
  return resultant;
}


// var words = ["ground", "control", "to", "major", "tom"];

// myMap(words, function(word) {
//   return word.length;
// });

// myMap(words, function(word) {
//   return word.toUpperCase();
// });

// myMap(words, function(word) {
//   return word.split('').reverse().join('');
// });

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]