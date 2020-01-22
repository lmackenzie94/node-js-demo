const http = require('http');

// Create server object
// go to localhost:5000 to see 'Hello World'
http
  .createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
  })
  .listen(5000, () => console.log('Server running...'));
