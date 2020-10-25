const express = require('express')
const path = require('path')
const app= express()


app.use(express.static(__dirname+ '/public'))
app.get('/',(req,res)=>{
 res.sendFile(__dirname+'/views/index.html')
})

app.post('/search',(req,res)=>{
 var data = "";
 req.on('data', function(chunk){ data += chunk})
 req.on('end', function(){
  req.rawBody = data;
  req.jsonBody = JSON.parse(data);
  next();
 })
 res.send(req.jsonBody)
})

app.listen(3000)