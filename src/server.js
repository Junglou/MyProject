import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from '../src/config/viewEngine';
import initWebRoutes from '../src/route/web';
import connectDB from './config/connectDB';
require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

viewEngine(app);
initWebRoutes(app)

connectDB()

let port = process.env.PORT || 3000;

app.listen(port, () => {
    //callback
    console.log("BackEnd NodeJs Is Running on the Port: " + port)
})