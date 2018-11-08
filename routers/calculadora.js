//routers/soma.js
const express = require("express")
const router = express.Router()
const calcController = require('../controlers/calculadora')

router.get('/soma/:a/:b', calcController.soma) 
router.get('/sub/:a/:b', calcController.sub) 

module.exports = router