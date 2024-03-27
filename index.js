require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const router = require("./router/post-router")
const errorMiddleware = require("./middleware/error-middleware")
const bodyParser = require("body-parser")


const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    credentials:true,
    origin: process.env.CLIENT_URL
}))
app.use("/post", router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, ()=> console.log("started at " + PORT))
    }
    catch (e){
        console.log(e.message)
    }
}

start()