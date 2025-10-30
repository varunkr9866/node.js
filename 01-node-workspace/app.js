// console.log("Hello World");

// const http = require('http')

// let server = http.createServer();

// server.listen(3200,()=>{
//     console.log('Application is running in port number 3200');
    
// })


// METHOD 2


// const http = require('http')

// let server = http.createServer((req,res) =>{
//     res.writeHead(200,{'content-type':"text-plain"})
//     res.write("Hello world")
//     res.end();
// });
    
// server.listen(3200,()=>{
//     console.log('Application is running in port number 3200');
    
// })


// METHOD 3

// const http = require('http');

// let server = http.createServer((req,res) =>{
//     if (req.url === '/home' && req.method ==='GET') {
//         res.writeHead(200,{"Content-type" :"text/plain"})
//         res.write('Home Page')
//         res.end();
        
//     } else if (req.url === '/faculty' && req.method ==='POST') {
//         res.writeHead(200,{"Content-type" :"text/plain"})
//         res.write('Faculty Page')
//         res.end();
//     } else {
//         res.writeHead(404,{"Content-type" :"text/plain"})
//         res.write('Page Not Found')
//         res.end();
//     } 
// });

//  server.listen(3200,()=>{
//     console.log('Application is running in port number 3200');
    
// });

//EXPRESS 
// const express = require('express');
// const app = express();

// app.get("/home",(req,res) =>{
//     console.log('IN HOME PAGE');
    
// })

// app.post("/faculty",(req,res) =>{
//     console.log('IN FACULTY PAGE');
    
// })

// app.get("/*",(req,res) =>{
//     console.log('IN PAGE NOT FOUND');
    
// })

// app.listen(3000,()=>{
//     console.log('Application Started at 3000');
    
// })


//EXPRESS METHOD 2
const express = require('express');
const app = express();

app.use(express.json());

app.post('/login', (req,res) =>{
    console.log(req.body);
    res.send("Login sucessfull!")
})

app.get("/home", (req,res) =>{
    res.send('IN HOME PAGE');
    
})

app.post("/faculty", (req,res) =>{
    res.send('IN FACULTY PAGE');
    
})

app.all("", (req,res) =>{
    res.send('PAGE NOT FOUND');
    
})



app.listen(3200,()=>{
    console.log('Application Started at 3200');
    
})
