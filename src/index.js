const express = require("express")
const route = require("./routes/route")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/",route)

app.listen(3000 || process.env.PORT,()=>{
    console.log("app is running on port 3000")
})