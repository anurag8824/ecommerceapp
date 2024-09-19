import mongoose from "mongoose";

const connection = () =>{
mongoose.connect("mongodb://localhost:27017/Ecomm")
.then(()=>{
    console.log("Database sucessfully connected!")
    
})
.catch((err)=>{
    console.log("error in connecting DataBase",err)
})


}

export default connection
