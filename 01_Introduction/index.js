// const http= require('http')
// const server = http.createServer((req,res) =>{
//     if (req.url === '/about') {
//         res.end('About Page');
//     } else if (req.url === '/contact'){
//         res.end('contact Page')
//     }
//     else{
//         res.writeHead(404)
//         res.end('Page Not Found')
//     }
// })
// server.listen(3000)


const http= require('http')
const fs = require('fs')

const contact = fs.readFileSync('contact.html') 
const about = fs.readFileSync('about.html') 
const nofile = fs.readFileSync('pagenotfound.html') 
const server = http.createServer((req,res) =>{
    if (req.url === '/about') {
        res.end(about);
    } else if (req.url === '/contact'){
        res.end(contact)
    }
    else{
        res.writeHead(404)
        res.end(nofile)
    }
})
server.listen(3000)


