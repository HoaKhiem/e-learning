const express = require('express');
const router = express.Router();

router.get('/subject',(req,res) => {
    res.status(200).render('subject');
})

module.exports = router