const modular = require('./modular');
const events = require('events');
const fs = require('fs');
const http = require('http');
const os = require('os');

// let ning = new modular.Person('ning', 18);
// ning.printName();
// let ming =new modular.Student('ming',19,'8z');
// ming.printSchool();
//
// class Myemitter extends events{}
// let myEmitter = new Myemitter();
// myEmitter.on('event',function(str) {
//     console.log(str);
// });
// myEmitter.emit('event','ou ha');
// let file = fs.readFileSync('.babelrc',{encoding:'utf-8'});//同步读取文件，会阻塞线程
// new Promise(function(resolve, reject) {
//     fs.readFile('.babelrc', function(err, data) { //异步读取文件，在读取完毕后触发回调
//         resolve(data);
//         reject(err);
//     });
// }).then(function(data) {
//     fs.writeFile('.replica', data, function(err) {
//         if (err) throw err;
//     });
// }).catch(function(err) {
//     if (err) throw err;
// }).then(function() {
//     fs.unlink('.replica',function(err) {
//         if (err) throw err;
//     });
// });
//
// fs.writeFile('.replica',data,function(err) {
//     console.log(err);
// });
// try {
//     fs.rmdirSync('./created');
// } catch (err) {
//     console.log(err);
// }
// fs.mkdir('./created', function(err) {
//     if (err) throw err;
// });
const server = http.createServer(function(req, res) {
    try {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        if (req.url === '/') {
            fs.createReadStream(__dirname + '/index.html').pipe(res);
        } else {
            let stat = fs.statSync(__dirname + req.url);
            if (stat.isFile() || stat.isDirectory()) {
                let fileStream = fs.createReadStream(__dirname + req.url, 'utf-8');
                fileStream.pipe(res);
            }
        }
    } catch (e) {
        console.log(e);
    }
});

server.listen(3011, '127.0.0.1', function() {
    console.log(server.listening ? 'server is listening' : 'server not listening');
});
