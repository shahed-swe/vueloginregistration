const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const compression = require("compression")
const RouteV1 = require("./api/routes")
const app = express()
require("dotenv").config()

app.use(compression())
app.use(cors({
    origin: "*"
}))
app.use(morgan("dev"))
app.use(bodyParser.json({limit: "50mb"}))
app.use("/api/v1", RouteV1)

app.get("/",(req, res, next) => {
    res.send("Nice! back-end is working")
})

mongoose.connect(process.env.DB_URL, {
    autoIndex: false,
})
.then(() => console.log("Database connected"))
.catch(error => {
    if(error) console.log("Database connection failed")
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`App running on ${port} port`)
})