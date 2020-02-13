const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();
const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("example2.txt.gz");

// readStream.on("data", chunk => {
//   writeStream.write(chunk);
// });

// Pipes - is a shorthand for the above code
// you need a readStream and you have to pass in a destination stream
// readStream.pipe(writeStream);

// pipe chaining - first we compress the file and than we pass in the destination stream
readStream.pipe(gzip).pipe(writeStream);
