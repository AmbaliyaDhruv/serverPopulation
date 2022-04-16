
const express = require('express');
const app = express();
const cors = require('cors');
const connect=require('./config/db');
const cities=require("./controller/cities.controller")
const countries=require("./controller/countries.controller");
const port=process.env.PORT||8080;
app.use(cors({origin:"*"}));

app.use(express.json());
app.use("/add-country",countries)
app.use("/add-city",cities)

app.listen(port,async()=>{
    try {
        connect();
        console.log("http://localhost:8080");
    } catch (error) {
        console.log(error.message);
    }
   
})