const SignUserModel = require("../model/signUpUserModel");

const getUser=async (req,res)=>{
res.status(200).json({MSG:"User list get"});
}

const SignupUser=async (req,res)=>{
   try {
    const {firstName,lastName,email,phoneNumber,password}=req.body
    const signupUser=await SignUserModel.create({firstName,lastName,email,phoneNumber,password});
    res.status(200).json(signupUser);
   } catch (error) {
    res.status(404).send(error.message);
   }

}

module.exports={getUser,SignupUser}