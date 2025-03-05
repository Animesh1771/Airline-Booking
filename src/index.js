const express = require("express");
const app=express();
const { PORT } = require("./config");

app.get('/',(req,res)=>{
  res.send('Hello World');
})

app.get('/ani',(req,res)=>{
  res.send('hello purbasha');
})
app.listen(PORT, () => {
  console.log(`Sucessfully start the server on port: ${PORT}`);
});