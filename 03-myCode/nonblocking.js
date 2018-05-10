// link to filesystem module
var fs = require('fs');

// load food list asynchronously
var food = fs.readFile('food.txt', 'utf8', function(err, food) {
  if (err) {
    console.log(err);
  } else {
    console.log(food);
  }
});

console.log('FOOD');

// repeat with drinks
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks) {
  if (err) {
    console.log(err);
  } else {
    console.log(drinks);
  }
});

console.log('DRINKS');
