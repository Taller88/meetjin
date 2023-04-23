const express = require("express");
const nunjucks = require('nunjucks');
const path = require('path');
const indexRouter = require('./routes/index');


const app = express();
app.set('port', process.env.ports||80);
app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    watch:true
})

app.use('/',indexRouter);

app.listen(app.get('port'),()=>{
    console.log("[Server] open : "+ app.get('port'))
})