const express = require('express')
const app = express()

const fruitsRouter = require("./routes/fruits")
const logger = require("./logger")

app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  res.send("Hello Fruity!")
})

app.use("/fruits", fruitsRouter)


module.exports = app