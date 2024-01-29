const express=require("express");
const { getUser, SignupUser } = require("../controller/userController");

const userRouter=express.Router();

userRouter.get("/user",getUser);

userRouter.post("/user/signUpUser",SignupUser)

module.exports=userRouter;