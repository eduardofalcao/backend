//routers/index.js
const express = require("express")
const router = express.Router()

router.get('/', (req,res) => res.send('Hello world2')) 

module.exports = router