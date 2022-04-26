const http = require('http')

const fs = require('fs')

const args = require('minimist')(process.argv.slice(2))

args["port"]


const port = args.port || process.env.PORT || 7000

function sendFile(fname, contentType, req, res) {
    res.writeHead(200, { 'Content-Type': contentType});
    fs.readFile(fname, function(error, data) {
        if(error)   {
            res.writeHead(404);
            res.write('Error: File not Found');
        } else {
            res.write(data);
        }
        res.end();
    })
}

// Logging Middleware


const server = http.createServer(function(req, res){
    if (req.url === "/") {
        sendFile('index.html', 'text/html', req, res);
    } else if (req.url === '/NorthCarolina.png') {
        sendFile('northcarolinawelcome', 'image/gif', req, res);
    } else if (req.url === '/northcarolinawelcome.jpeg') {
        sendFile('NorthCarolina.png', 'image/gif', req, res);
    } else if (req.url === '/style.css') {
        sendFile('style.css', 'text/html', req, res);
    } else if (req.url === '/index.js') {
        sendFile('index.js', 'text/javascript', req, res);
    } else if (req.url === '/mainPage.html') {
        sendFile('mainPage.html', 'text/html', req, res);
    } else if (req.url === '/index.html') {
        sendFile('index.html', 'text/html', req, res);
    } else {
        res.writeHead(404);
        res.end('Error: Unsupported path');
    }
});

server.listen(port, () =>{
    console.log(`Server running at port ${port}`)
})

// fs.readFile('./mainPage.html', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }


// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/html')
//     res.end(data)
// })


// server.listen(port, () =>{
//     console.log(`Server running at port ${port}`)
// })
// })