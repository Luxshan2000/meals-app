const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")


const connectMongoDb = require("./config/database")
const addRoutes = require('./src/routes/addRoutes');
const getRoutes = require('./src/routes/getRoutes');

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin:["*"],//"exp://192.168.8.182:8081"
  methods:["GET"],
  credentials:true
}))  

app.use(bodyParser.json())


app.use('/api/add', addRoutes); 
app.use('/api/get', getRoutes); 



connectMongoDb()








app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
