const express = require('express')
const cors = require('cors')
const app = express()


const CinemaRoutes = require("./Routes/routes")

app.use(cors())
app.use(express.json())

app.use('/cinema', CinemaRoutes)


app.listen(3010,()=>{
    console.log("servidor rodando ...")
})
