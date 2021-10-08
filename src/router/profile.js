const express = require('express')
const router = express.Router();

router.get('/profile',(req,res) => {
    if(!req.session.user){
        res.redirect('/login');
    }else{
        res.render('profile');
    }
})

module.exports = router