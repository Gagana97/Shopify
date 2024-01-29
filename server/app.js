const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const userRouter = require("./routes/userRouter");
dotenv.config();

//create express instance
const app=express();

app.use(express.json());
app.use(cors());

app.use("/api",userRouter);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(5000,(err)=>{
        if(err) throw err;
        console.log("DataBase connected && server listening on port 5000")
    });
}).catch((err)=>{
console.log(err.message)
})

