const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const session = require('express-session');
const alert = require('alert')

//------admin pass: khiem2k1
//
const oneDay = 1000 * 60 * 60 * 24;
require('../data/mongo')
// router.use(cookieParser);

router.use(sessions({
    secret: "thisismyscretkey06022001",
    saveUninitialized:true,
    cookie:{
        maxAge: oneDay
    },
    resave:false
}))
let x = -1;
let n = '';
router.post('/loginn', async (req,res) => {
    
    try{
        const user = await User.find({userName:req.body.your_name});
        if(!user || user.length===0){
            res.render('signin',{
                name: 'Mật khẩu chưa đúng'
            });
        }
        else{
            if(await bcrypt.compare(req.body.your_pass, user[0].password)){
                req.session.user = user[0].userName;
                x = user[0].role;
                n = user[0].userName;
                if(x == 0){
                    req.session.user = user[0].userName;
                    res.redirect('/admin');
                }else{
                    alert("Đăng nhập thành công");
                    res.render('index');
                }
            }
            else{
                res.render('signin',{
                    name: 'Tài khoản hoặc mật khẩu không tồn tại'
                });
            }
        }
    }catch(e){
        res.render('signin',{
            name: 'Có lỗi xảy ra'
        })
    }
})
router.get('/ss',(req,res) => {
    res.send({'id':x, 'n':n});
})
module.exports = router