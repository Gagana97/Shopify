const express=require("express");
const { getUser, SignupUser, getSignUpUserList } = require("../controller/userController");

const userRouter=express.Router();

userRouter.get("/user",getUser);

userRouter.post("/user/signUpUser",SignupUser)

userRouter.get("/user/getSignUpUserList",getSignUpUserList)

module.exports=userRouter;