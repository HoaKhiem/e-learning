const express = require('express')
const router = express.Router();
const Post = require('../model/post');
router.get('',(req,res) => {
    res.status(200).render('index');
})
router.get('/home',(req,res) => {
    res.status(200).render('index');
})
router.post('/search',async (req,res) => {
    try{
        const post = await Post.find({subject:req.body.search});
        if(post.length === 0){
            return res.render('index',{
                name: 'Không có kết quả tìm kiếm'
            })
        }
        await res.render('index',{
            post: post
        });
    }catch(e){
        res.send(e);
    }
})
module.exports = router