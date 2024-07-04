import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import { getDataFromToken } from "@/utils/getDataFromToken";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";
connect(); //In vercel behind the scene functions are deployed. They can't find whether they are connected to data base or not . So we have to connect with database in every routing becuase nextjs run in edge(near server)



export async function POST(request:NextRequest){

try{
    const userId = await getDataFromToken(request)
const user = await User.findOne({_id:userId}).select("-password");
if(!user){
    return NextResponse.json({
        error: "User not found",

    },{status:400})
}

return NextResponse.json({
    message:"User found",
    data:user

},{status:200})
}
catch(error:any)
{
    return NextResponse.json({
        error:error.message
    },{status:500})
}
}