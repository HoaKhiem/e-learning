const express = require('express')
const router = express.Router();
const session = require('express-session');
const User = require('../model/user')
router.get('/admin',(req,res) => {
    if(req.session.user === 'admin'){
        res.render('dashboard');
            // console.log(req.session.user);
    }
    else{
        res.redirect('/');
    }
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
router.get('/admin/userslist', async (req,res) => {
    const users = await User.find({role:2});
    res.send(users);
}) 
router.get('/admin/teacherlist', async (req,res) => {
    const teachers = await User.find({role:1});
    res.send(teachers);
})
module.exports = router