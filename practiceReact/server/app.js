const express=require('express');
const app=express();
const port =3000;;
const db=require('./db')
db()
app.listen(port,(req,res)=>{
    console.log(`run on ${port}`)
})