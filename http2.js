const http = require("http");
const fs = require("fs");

// serving a HTML file
// http
//   .createServer((req, res) => {
//     const readStream = fs.createReadStream("./static/index.html");
//     res.writeHead(200, { "Content-type": "text/html" });
//     readStream.pipe(res); // res is a writable stream
//   })
//   .listen(3000);

// serving a json file
// http
//   .createServer((req, res) => {
//     const readStream = fs.createReadStream("./static/example.json");
//     res.writeHead(200, { "Content-type": "application/json" });
//     readStream.pipe(res); // res is a writable stream
//   })
//   .listen(3000);

// serving an img
http
  .createServer((req, res) => {
    const readStream = fs.createReadStream("./static/1.jpg");
    res.writeHead(200, { "Content-type": "image/jpg" });
    readStream.pipe(res); // res is a writable stream
  })
  .listen(3000);
