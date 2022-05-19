const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');
app.use(bodyParser.json());
app.use(cors());
const users= require('./routes/userRoutes');
const admin= require('./routes/adminRoutes');

mongoose.connect("mongodb://127.0.0.1/jackpot", { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection.once('open', function () {
    console.log('Connected')
}).on('error', function (error) {
    console.log(error)
});

app.use('/',users);
app.use('/',admin);

app.listen(5000,()=>{
    console.log("Server started at 5000");
});