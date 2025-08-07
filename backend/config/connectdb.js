import mongoose from "mongoose";
export const connectdb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_Url)
    }catch(error){
        console.log(error);
        

    }
};