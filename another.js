const http = require('http');
const fs = require('fs');

let readableStream = fs.createReadStream(__dirname + '/random.txt');
let writeStream = fs.createWriteStream(__dirname + '/write.txt');

readableStream.pipe(writeStream);
