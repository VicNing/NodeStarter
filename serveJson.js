const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer(function (req, res) {
    let json = {
        name: 'ning',
        age: 129
    };
    switch (req.url) {
        case '/':
            generateResponse(req, res, {
                'Content-type': 'text/html'
            }, path.join(__dirname, 'index.html'));
            break;
        case '/json':
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            res.end(JSON.stringify(json));
            break;
        default:
            generateResponse(req, res, {
                'Content-type': 'text/html'
            }, path.join(__dirname, 'index.html'));
            break;
    }
});

server.listen(8080, '127.0.0.1', function () {
    console.log(server.listening ? 'Server is listening' : 'Server is not listening');
});

function generateResponse(req, res, header, file) {
    res.writeHead(200, header);
    fs.createReadStream(file).pipe(res);
}