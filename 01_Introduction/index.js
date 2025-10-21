const http= require('http')
const server = http.createServer((req,res) =>{
    if (req.url === '/about') {
        res.end('About Page');
    } else if (req.url === '/contact'){
        res.end('contact Page')
    }
    else{
        res.writeHead(404)
        res.end('Page Not Found')
    }
})
server.listen(3000)