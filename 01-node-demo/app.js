console.log("Hello World");

const http = require('http')

let server = http.createServer();

server.listen(3200,()=>{
    console.log('Application is running in port number 3200');
    
})