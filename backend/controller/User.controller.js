import EmailVerfication from "../middlewares/Emailverfication.js";
import userModel from "../model/user.model.js";
import crypto from "crypto";
const genrateOtp = ()=>{
return crypto.randomInt(1000,10000)
}
 

const EmailRegister = async (req,res) =>{
    const Email = req.body.Email;
    const user = await userModel.findOne({Email:Email})
    console.log(user)
    if(user){
      return res.json("user already exist!")
    }
    const otp = genrateOtp();
    console.log(otp)

  
   const Subject = "Otp Verification";
   const Message = `Otp is ${otp}`
  try {
     EmailVerfication(Email,Subject,Message)
  
      await userModel.create({
          Email:Email,
          Otp:otp
    
     })
    res.status(200).json({msg:"Email sent sucessfully !"})
  } catch (error) {
    console.log(error)
    res.status(202).json({msg:"Error in sending Email !"})

  }


}

const OtpVerfiy = async(req,res)=>{
    const {Email,Otp} = req.body;
    const user = await userModel.findOne(Email);
    if(!user){
        res.json("Email Doesn't match");

    }
    if(user.Otp == Otp){
        res.status(200).json("Sucessfully Otp Match")
        user.verifed = true;
        await user.save();
    }
    else{
        res.json("Otp Doesn't Match")
    }

}

const UserData = async(req,res)=>{
    const {Email,first_Name,last_Name,Phoneno } = req.body
    const user = await userModel.finddOne(Email);
    if(!user){
        return res.json("Email doesn't exist in db");
    
    }
    user.first_Name = first_Name;
    user.last_Name = last_Name;
    user.Phoneno = Phoneno;

    await user.save()
    res.status(200).json("sucessfully Registered !");
}

const ResndOtp = async (req,res)=>{
    
}

export default {EmailRegister,OtpVerfiy,UserData,ResndOtp}