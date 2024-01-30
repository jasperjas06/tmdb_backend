import express from 'express'
import DBconfig from './config/DBconfig.js'
import bodyParser from 'body-parser';
import User from './router/user.route.js'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express();
DBconfig()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.get("/",(req,res)=>{
    res.json("Port working ")
})

app.use("/api",User)

const PORT = 2000 || process.env.PORT
app.listen(PORT,()=>{
    try {
        console.log("Server connected");
    } catch (error) {
        console.log(error);
    }
})