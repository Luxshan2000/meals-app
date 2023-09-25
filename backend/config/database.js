require('dotenv').config();
const Meal = require('../src/modals/meal')
const mongoose = require("mongoose");


const   connectMongoDb = async ()=>{
        mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('====================================');
        console.log("mongoDB is sucessfully connected!");
        console.log('====================================');

    }).catch((error)=>{
        console.log('====================================');
        console.log("mongoDB configration error\n",error);
        console.log('====================================');
    })
}

module.exports = connectMongoDb;