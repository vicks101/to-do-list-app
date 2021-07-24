const express=require('express');
const app=express();

const port=80;
const db=require('./config/mongoose');
const sassMiddleware=require('node-sass-middleware');

//cookie-parser and express-session required for noto
const cookieParser=require('cookie-parser');
const session=require('express-session');

const flash = require('connect-flash');
const customMiddleWare=require('./config/middleware')

//using sass middlewre for styling
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle:'extended',
    prefix:'/css'
}));

const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);

//extract style and scripts from sub page of the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//to access the assets folder
app.use(express.static('./assets'));
app.use(express.urlencoded());

//use for noty which is required
app.use(session({
    name: 'health-tracker',

    //ToDo change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    }
}));


// use flash-connet to notify the user
app.use(flash());
app.use(customMiddleWare.setFlash);


//use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
   
});
