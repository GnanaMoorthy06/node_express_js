import dotenv from 'dotenv/config'
import express from "express"
import { DB } from './db/config.js'

const app = express()
app.use(express.json())

app.get('/',(req , res)=>{
    res.send('app created')
})

const PORT = process.env.PORT || 5000

DB.connect().then(()=>{
    console.log('\x1b[32m%s\x1b[0m',`Database connected successfully`);
    app.listen(PORT , ()=>{
    console.log('\x1b[32m%s\x1b[0m', `server running in PORT ${PORT}`)
})
}).catch((err)=>{
    console.log('\x1b[31m%s\x1b[0m','Err while connecting to Database',err);
    
})


