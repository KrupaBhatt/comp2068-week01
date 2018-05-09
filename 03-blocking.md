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
```
