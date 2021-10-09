const express = require('express')
const router = express.Router();
const User = require('../model/user')

router.get('/profile',(req,res) => {
    if(!req.session.user){
        res.redirect('/login');
    }else{
        res.render('profile');
    }
})
router.get('/profile/getprofile',async (req,res) => {
    const user = await User.find({userName: req.session.user});
    res.status(200).send(user);
})

router.post('/profile/edit', async (req,res) => {
    await User.update({userName: req.session.user},{name: req.body.name, location: req.body.location, describe: req.body.describe})
    res.redirect('/profile');
})
module.exports = router