import express from 'express'
import * as dotenv from 'dotenv' 
dotenv.config()

const app = express()

app.get("/get", (req,res)=>{
    res.send("Hello world")
})

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Running at ${port}`)
})