const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({path:'./config/config.env'});

app.post('api/v1/userRegister',(req,res)=>
{
    res.send("Registration success")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})