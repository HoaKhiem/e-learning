const express = require('express')
const router = express.Router();
const User = require('../model/user')
const bcrypt = require('bcrypt');
router.post('/studentregister', async (req,res) => {
    req.body.password = await bcrypt.hash(req.body.password,8);
    const user = new User(req.body);
    try{
        const userName = req.body.userName;
        const rs = await User.find({userName:userName});
        if(rs.length===0){
            await user.save();
            res.render('signup',{
                name: 'Đăng ký tài khoản thành công <a href="/signin">Đăng nhập ngay</a>'
            });
        }else{
            res.render('signup',{
                name: 'Tên tài khoản đã tồn tại'
            })
        }
    }catch(e){
        res.render('signup',{
            name: 'Đăng ký thất bại, có lỗi xảy ra'
        });
    }
})
module.exports = router