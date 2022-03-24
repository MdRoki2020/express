const { resolveSoa } = require('dns');
const express=require('express');
const { get } = require('http');
const { send } = require('process');
const app=express();

app.get("/",(req,res)=>{
  res.send('its a get method');
})

app.post("/",(req,res)=>{
  res.send('its a post method')
})

app.put("/",(req,res)=>{
  res.send('its a put method')
})

app.delete("/",(req,res)=>{
  res.send("its a delete method")
})

module.exports=app;