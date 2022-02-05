const http = require('http');
const app = http.createServer((req,res) => {
    //res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    res.end('Hello World 我爱我爹')
})

app.listen(3000);