const express = require('express')
const path = require('path')

const app = express()

app.listen(3000,()=>{
    console.log("App Listening");
    
})
app.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/about',(req,res) =>{
    res.json({
        name : 'About Me'
    })
})