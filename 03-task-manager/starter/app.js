const express= require('express')
const app=express();
const tasks=require("./router/routes")
const port=4040;

// app.use(express.static('./public'))
app.use(express.json());


app.get('/hello',(req,res)=>{
    res.send("working fine")
})
app.use('/api/v1/tasks',tasks);


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})