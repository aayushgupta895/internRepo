const express = require('express')

const nextRouter = express.Router()


nextRouter.post('/', (req, res)=>{
    const body = req.body;
    res.send({
        "your name is" : body["name"]
    });
})



module.exports = nextRouter;