const mongoose = require('mongoose');

const Users = mongoose.model('users',{
    name:{
        type:String,
        default:'Chưa có tên'
    },
    email:{
        type:String
    },
    userName:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type: Number,
        default: 2
    },
    describe:{
        type: String,
        default: 'Chưa có mô tả'
    },
    location: {
        type: String,
        default:'Việt Nam'
    },
    image_path:{
        type: String,
        default:'./image/users/cat.jpg'
    }
})

module.exports = Users