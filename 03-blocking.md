# Blocking vs Non-blocking (sync vs async)

1.  Within `lesson1` create new file called `food.txt` with some entries

```
oatmeal
apple
pizza
muffin
toast
chocolate
eggs
bagel
bread
butter
```

1.  Then create `drinks.txt`

```
water
coffee
tea
coke
pepsi
mountain dew
red bull
tequila
monster
```

1.  Create `blocking.js`

```js
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
console.log('\nDRINKS');
console.log(drinks);
```

So if you run code above `node blocking.js` it does what you anticipate.

1.  Create `nonblocking.js`

```js
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

var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks) {
  if (err) {
    console.log(err);
  } else {
    console.log(drinks);
  }
});

console.log('DRINKS');
```

So if you run code above `node nonblocking.js` it doesn't do what you think. Try running it multiple times and view if output differs.

* Fix the above so that headings fit above appropriate lists
