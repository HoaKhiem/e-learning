const express = require('express')
const router = express.Router();
const alert = require('alert')


router.get('/test',(req,res) => {
    alert("haha");
    res.send('<h1>HELLO</h1>');
})

module.exports = router