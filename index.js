const express = require('express')
const router = require('./authRouter')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/auth',router)
const  start = async()=>{
    try {
        await mongoose.connect('mongodb+srv://MikoBN:root@cluster0.wcnsbnk.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log("Server started on port: "+PORT))
    } catch (e) {
        console.log(e);
    }
}

start()