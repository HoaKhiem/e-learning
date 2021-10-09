const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true
})

'mongodb+srv://codey:<khiem2k1>@cluster0.xq97o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'