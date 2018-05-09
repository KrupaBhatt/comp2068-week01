# Watch 11 min. video

[link to video](https://www.youtube.com/watch?v=GJmFG4ffJZU)

# Node's Hello world > output to console

1.  Within your `lesson1\` folder create file `helloworld.js`

```js
// print message to console
console.log('Hello world');
```

2.  in command prormpt type: `node helloworld`

# Node's Hello world > output to browser

1.  Within `lesson1\` create file `server.js`

```js
// link to node's http library
var http = require('http');

// start a local web server on port 3000 and listen for events
http
  .createServer(function(request, response) {
    response.writeHead(200); // what does 200 mean?
    response.end('Our first node page');
  })
  .listen(3000);

// print the server has started
console.log('Server running on port 3000');
```

1.  Then run it via `node server`

    * Why is the command prompt locked?
    * How can you check status code of 200 in browser?
    * What happens if you change 200 to 404 -- will it still work?
    * Why doesn't the console message print in browser's console?
    * What happens if you change the listen code from 3000 to 4000, then refresh browser?
      * What happens if you change localhost:3000 to 4000?
      * So how do you see the change?
    * Is restarting server a pain point?
