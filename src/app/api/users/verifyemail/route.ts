import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request:NextRequest)
{
    try{
        await connect();
        const reqBody = await request.json();
        const {token} = reqBody;
  
        console.log(token);
        
                const user =await User.findOne({verifyToken:token,
                    verifyTokenExpiry:{$gt:Date.now()}
                });
if(!user)
    {
        return NextResponse.json(
            {
                error:"Invalid token found",

            },
            {
                status:400
            }
        )
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

  const savedUser =  await user.save();

return NextResponse.json(
    {
        message:"Email verified successfully",
success:true
    },
   { status:200}
)

    }
    catch(error:any)
    {
        return NextResponse.json(
            {
error:error.message
            },
            {
                status:500
            }
        )
    }
}