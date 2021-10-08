const express = require('express');
const chalk = require('chalk');
const hbs = require('hbs');
const path = require('path');
const bodyParser =require('body-parser');

//express initialize
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const public_directory = path.join(__dirname, '../public'); //get path of public directory
const view_directory = path.join(__dirname,'../template/views'); //get path of view directory
const partial_directory = path.join(__dirname, '../template/partials'); //get path of partial directory
const admin_directory = path.join(__dirname,'../public/admin/examples')
//-----------define router---------------------
const loginnRouter = require('./router/loginn');
const loginRouter = require('./router/login');
const signUpRouter = require('./router/signup');
const aboutRouter = require('./router/about')
const indexRouter = require('./router/index')
const classRouter = require('./router/class')
const profileRouter = require('./router/profile')
const subjectRouter = require('./router/subject')
const logOutRouter = require('./router/logout');
const registerRouter = require('./router/register');
const studentRegitser = require('./router/studentRegister')
const postRouter = require('./router/post')
const z = require('./router/z')
const adminRouter = require('./router/admin')
//--------------Use router-----------------
app.use(loginnRouter);
app.use(loginRouter);
app.use(signUpRouter);
app.use(aboutRouter);
app.use(indexRouter);
app.use(classRouter);
app.use(profileRouter);
app.use(subjectRouter);
app.use(logOutRouter);
app.use(registerRouter);
app.use(studentRegitser);
app.use(postRouter);
app.use(z);
app.use(adminRouter);
//---------------Other routers-----------
app.set('view engine','hbs'); //set hbs as view type
app.set('views', view_directory); //use view as view engine

app.use(express.static(public_directory)); //use public directory
hbs.registerPartials(partial_directory);
const port = process.env.PORT || 3200;
app.get('/*',(req,res) => {
    res.render('404');
})
app.get('/admin/*',(req,res) => {
    res.render('dashboard');
})
//----------------------------------------------Run app in host-------------------------------------
app.listen(port, () => {
    console.log(chalk.white.bold.bgGreen("App started at port "+port));
})