const express=require('express');
const app=express();
var path=require('path'); 
const routes='./routes/api';
app.use('/',require(routes));
app.listen(8080,()=>{
    console.log("the server is listening");
})
