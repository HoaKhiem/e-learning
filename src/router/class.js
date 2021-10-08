const express = require('express');
const router = express.Router();

router.get('/class',(req,res) => {
    if(!req.session.user){
        res.render('signin',{
            name:'Hãy đăng nhập để xem lớp học của bạn'
        });
    }
    else{
        res.status(200).render('class');
    }
})

module.exports = router