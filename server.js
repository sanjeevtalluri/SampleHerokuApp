const express=require('express');
const app=express();
const PORT=process.env.PORT||4444;
app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(PORT,()=>{
    console.log('server started');
})