const express = require('express')
const router = express.Router();
const Post = require('../model/post');
const alert = require('alert');
router.post('/post', async(req,res) => {
    if(!req.session.user){
        res.render('signin',{
            name: 'Hãy đăng nhập để đăng bài'
        })
    }else{
        req.body.author = req.session.user;
        req.body.ic = req.session.ic;
        const post = new Post(req.body);
        await post.save();
        alert("Đăng bài thành công");
        res.redirect('/');
    }
})
router.get('/api/postlist',async (req,res) => {
    const post_list = await Post.find({valid:true});
    post_list.user = req.session.user;
    res.send(post_list);
})

module.exports = router