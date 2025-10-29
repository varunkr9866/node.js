// console.log("Hello World");

// const http = require('http')

// let server = http.createServer();

// server.listen(3200,()=>{
//     console.log('Application is running in port number 3200');
    
// })


const http = require('http')

let server = http.createServer((req,res) =>{
    res.writeHead(200,{'content-type':"text-plain"})
    res.write("Hello world")
    res.end();
});
    
server.listen(3200,()=>{
    console.log('Application is running in port number 3200');
    
})