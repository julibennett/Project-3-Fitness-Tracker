require("dotenv").config()

const cors = require("cors")
const express = require("express")
const app = express()
const { PORT } = process.env
const methodOverride = require("method-override")

//Connect to Database
const mongoose = require("mongoose")
const mongoURI = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(mongoURI)
db.on('error', (err) => console.log(err.message + ' is mongo not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

//Middleware
app.use(cors("*"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))

//Routes
//app.use("/fit", controllers)

//app.use((req, res) => {
//    res.status(404).json({message: "Not a proper route..."})
//})

app.listen(PORT, () => {
    console.log(`I'm listening on ${PORT} 🫡`)
})