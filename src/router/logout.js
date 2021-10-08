const express = require('express')
const router = express.Router();
const aletr = require('alert')
router.get('/logout', (req,res) => {
    if(req.session.user){
        req.session.destroy();
        aletr("Đã đăng xuất")
        res.redirect('/');
    }else{
        res.render('signin',{
            name: 'Hãy đăng nhập trước'
        });
    }
})

module.exports = router