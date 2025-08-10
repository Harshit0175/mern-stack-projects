
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import user from "../models/usermodels.js";

//register a user

export const register=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        if(!name||!email||!password||!role){
     return res.json({success:false,message:'all fields are required'})   
     }
     const image=req.file.filename;
     const existinguser=await user.findOne({email});
     if(existinguser){
        return res.json({success: false,message:"user already exists"});
     }
     const hashedpassward=await bcrypt.hash(password,10);
     const  user=await user.create({
        name,
        email,
        password: hashedpassward,
        role,
        image,
     });
     return res.json({success:true,message:'user registered successfully',user})

    }catch(error){
        // console.log(error);
     return res.json({success:false,message:'sinternal server error'})   
    }
};
//login user    
export const login=async (req,res) => {
        const {email,password}=req.body;

    try{

        if(email===process.env.admin_email && password===process.env.admin_password){
            const token=jwt.sign({email:process.env.admin_email},process.env.jwt_secret_key,{expiresIn:'1d'})
            return res.json({success:true,message:'admin logged in  sucessfully',user:{email:process.env.admin_email,role:'admin'}});

        }
        const user= await user.findone({email})
        if(!user){
             return res.json({success:false,message:"user not found"})
        }
        const ismatch=await bcrypt.compare(password,user.password)
        if(!ismatch){
            return res.json({success:false,message:"invalid credentials"})
        }
            const token=jwt.sign({user:user._id},process.env.jwt_secret_key,{expiresIn:'1d'});
            res.cookie('token',token),
            {
                http:true,
            };
            return res.json({
                success:true,
                message:'user login sucessfully',
                user,
            });
    }
    catch(error){
        return res.json({success:false,message:"success:false,message:'sinternal server error"})
    }
};
export const logout=async (req,res)=>{
    res.clearcookie('token');
    return res.json({success:true,message:'log out sucessfully'})
    
}