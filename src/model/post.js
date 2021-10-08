const mongoose = require('mongoose')
const Post = mongoose.model('post',{
    title:{
        type:String
    },
    content:{
        type: String
    },
    author:{
        type:String
    },
    valid:{
        type: Boolean,
        default: true
    },
    grade:{
        type: String
    },
    subject:{
        type: String
    },
    location:{
        type: String
    },
    salary:{
        type: Number
    },
    ic: {
        type: Number,
        default: 2
    }
})
module.exports = Post