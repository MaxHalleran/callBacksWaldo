var countdownGenerator = function (x) {
  let count = x;

  return function() {
    let result = "";

    result += (((count > 0) ? ("T-minus " + count + "...") : "") + ((count === 0) ? "Blast Off!" : "") + ((count-- < 0) ? "Rockets already gone, bub!" : ""));

    return console.log(result);
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!