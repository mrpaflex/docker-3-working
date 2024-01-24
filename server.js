const { json } = require('body-parser');
const express = require('express');
const app = express();

const {router} = require('./router/main.router');

const {config} = require('dotenv');
config();



const {connectDB} = require('./config/db.config')

connectDB();
const PORT = process.env.PORT;
app.use(express.urlencoded({extended: true}));
app.use(json());

app.use(router)

app.listen(PORT, ()=>{
    console.log(`now running successfully on port ${PORT}`)
})