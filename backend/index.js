const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const expenseRoute = require("./routes/expense");

dotenv.config({ path: "./.env" });
console.log("DB_CONNECTION:", process.env.DB_CONNECTION);
console.log("PORT:", process.env.PORT);

const app = express();

//middware 
app.use(cors());
app.use(express.json())

//routes
app.use("/expenses",expenseRoute)

//db connection 
mongoose.connect(process.env.DB_CONNECTION).then(() =>{
    console.log("DB connection is sucessful")
}).catch((err) =>{
    console.log(err);
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port no. ${process.env.PORT}`)
})