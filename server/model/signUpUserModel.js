const {Schema,model}=require("mongoose")

const signupUserSchema=new Schema({
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
phoneNumber:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
createdAt:{
    type:Date,
    default:Date.now(),
    required:true
}
})

const SignUserModel=model("SignUpUser",signupUserSchema);

module.exports=SignUserModel;