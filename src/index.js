const express = require('express');
const app=express();
const { ServerConfig,Logger } = require('./config');
const {}=require('./controllers');
const apiRoutes= require('./routes');

app.get('/',(req,res)=>{
  res.send('Hello World');
})

app.get('/ani',(req,res)=>{
  res.send('hello purbasha');
})
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT, () => {
  console.log(`Sucessfully start the server on port: ${ServerConfig.PORT}`);
});