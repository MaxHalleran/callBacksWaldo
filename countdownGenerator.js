var countdownGenerator = function (x) {

  return function() {

    let result = ( (x > 0) ? ("T-minus " + x-- + "...") : ( (x-- === 0) ? "Blast Off!" : "Rockets already gone, bub!") );

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