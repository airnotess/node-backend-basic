const express = require('express')
const mongoose = require('mongoose')
//const {router} = require('./route/user')
const {userRouter} =require('./route/user2')
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('database connected')
})

const app = express()
app.use(express.json());
app.use(cors());
app.use('/api/v1/user',userRouter)

app.listen(3000,()=>{
    console.log('server is running on port 3000')    
})
