import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv  from "dotenv";
import { connectdb } from "./config/connectdb.js";
import authrouter from "./routes/authroutes.js";

dotenv.config();
const app=express();
// middleware;
const allowedorigin=['http://localhost:5173']
app.use(express.json());
app.use(cors({origin:allowedorigin, credentials:true}));
app.use(cookieParser());
//connect to db
connectdb();

// api endpoint
app.get('/',(req,res)=>{
    res.send('hello')
})
app.use('/auth',authrouter);
const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log('app listen on http://localhost:4000');
    
})
