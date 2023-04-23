const express = require("express");

const app = express();
app.set('port', process.env.ports||80);
const indexRouter = require('./routes/index');

app.use('/',indexRouter);

app.listen(app.get('port'),()=>{
    console.log("[Server] open : "+ app.get('port'))
})