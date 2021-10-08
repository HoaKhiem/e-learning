const express = require('express')
const router = express.Router();
const session = require('express-session')
router.get('/admin',(req,res) => {
    if(!req.session.user){
            res.render('dashboard');
            // console.log(req.session.user);
    }
    else{}
    // console.log('jasidfhkjd')
    // res.render('dashboard');
})
router.get('/admin/noti', (req,res) => {
    res.render('notifications');
})
router.get('/admin/users',(req,res) => {
    res.render('user');
})
router.get('/admin/tables', (req,res) => {
    res.render('tables');
})
module.exports = router