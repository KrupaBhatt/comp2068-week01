// link to node's file system module to read text files
var fs = require('fs');

// open and read food list - what's happening in the line below?
var food = fs.readFileSync('food.txt', 'utf8');

// print a food heading and a list of food
console.log('FOOD');
console.log(food);

// open read drinks list
var drinks = fs.readFileSync('drinks.txt', 'utf8');

// print a drinks heading and list of drinks
console.log('DRINKS');
console.log(drinks);
