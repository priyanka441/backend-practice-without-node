const express=require("express");
const app=express();
const mongoose=require("mongoose");

app.use(express.json());
const db=require("./Middleware/Middleware")
db.connectToDb();



const userRoutes = require("./Routes/UserRoute");


app.use("/user", userRoutes);

app.listen(3000,()=>{
    console.log("Server is started on 3000")
})