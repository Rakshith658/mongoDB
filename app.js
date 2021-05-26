const express = require('express')
const path = require('path')

const app = express()

app.use('/',express.static(path.resolve(__dirname,'assets')))


app.listen(5050,()=>{console.log("server up");})