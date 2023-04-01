const express = require('express')
const router = require('./router')
const nextRouter = require('./nextRouter')
const app = express();

app.use(express.json())

app.use('/', router);

app.use('/', nextRouter)

// app.use('/', )



app.listen(3000, ()=>{
    console.log("it is connected");
});