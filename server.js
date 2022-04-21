const http = require('http')

const fs = require('fs')

const args = require('minimist')(process.argv.slice(2))

args["port"]


const port = args.port || process.env.PORT || 3000

fs.readFile('./index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
})


server.listen(port, () =>{
    console.log(`Server running at port ${port}`)
})
})