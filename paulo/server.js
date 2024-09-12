const express = require("express");
const bodyParser = require("body-parser")
const port = 3000
const heroiRoutes = require("./routes/heroi")

const app = express()
app.use(bodyParser.json())

app.use("/heroi", heroiRoutes)

app.listen(port, () =>{
    console.log("Servidor express rodando!")
})