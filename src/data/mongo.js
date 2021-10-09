const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true
})

'mongodb+srv://codey:<khiem2k1>@cluster0.xq97o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'