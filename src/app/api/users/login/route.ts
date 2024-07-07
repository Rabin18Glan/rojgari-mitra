import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";
connect(); //In vercel behind the scene functions are deployed. They can't find whether they are connected to data base or not . So we have to connect with database in every routing becuase nextjs run in edge(near server)



export async function POST(request:NextRequest){

    try{
        const reqBody = await request.json();

        const {email,password} = reqBody;
const user = await User.findOne({email});
if(!user)
    {
        return NextResponse.json({
            error:"User not found",
            
        },{status:400})
    }
    console.log("user found");
    
    const validPassword = await bcryptjs.compare(password,user.password);
    if(!validPassword)
        {
            return NextResponse.json({
                error:"Password does not match. Check you credentials",
                
            },{status:400}) 
        }

        console.log("password matched")

        const tokenData = {
            id:user._id,
            username:user.username,
            email:user.email
        }//usually only id is used for lower bandwith

const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1d'})


const response =  NextResponse.json({
    message:'Logged in successfully',
    success:true,
});

response.cookies.set("token",token,{
    httpOnly:true
})

    }catch(error:any)
    {
        return NextResponse.json(
            {error:error.message},
        {status:500})
    }

}