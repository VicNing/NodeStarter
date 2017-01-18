const http = require('http');
const fs = require('fs');

let readableStream = fs.createReadStream(__dirname + '/random.txt');
let writeableStream = fs.createWriteStream(__dirname + '/write.txt');

readableStream.pipe(writeableStream);


let temp = fs.createReadStream();
temp.on('data', (chunk) => {

});