import dotenv from 'dotenv/config'
import express from "express"
import cors from 'cors'
import { DB } from './db/config.js'
import routes from './routes/routes.js'
import errHandler from './middlewares/errHandler.js'

// create app
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use('/api',routes)

//err handling
app.use(errHandler)

const PORT = process.env.PORT || 5000

//connect db
DB.connect().then(()=>{
    console.log('\x1b[31m%s\x1b[0m',`Database connected successfully`);
    //start server
    app.listen(PORT , ()=>{
    console.log('\x1b[31m%s\x1b[0m', `server running in PORT http://localhost:${PORT}`)
})
}).catch((err)=>{
    console.log('\x1b[31m%s\x1b[0m','Err while connecting to Database',err);
    
})


