const express = require('express')
const cors = require('cors')
const app = express()

const fruitsRouter = require("./routes/fruits")
const logger = require("./logger")

app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  res.send("Hello Fruity!")
})

app.use("/fruits", fruitsRouter)


module.exports = app