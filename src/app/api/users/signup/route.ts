import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest,NextResponse} from "next/server"
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/utils/mailer";
connect(); //In vercel behind the scene functions are deployed. They can't find whether they are connected to data base or not . So we have to connect with database in every routing becuase nextjs run in edge(near server)

export async function POST(request:NextRequest)
{

try{
     
    const reqBody =await request.json();
    const {username,email,password,role} = reqBody;
    //validation
    console.log(reqBody);

    const user = await User.findOne({email})

    if(user)
        {
            return NextResponse.json({
                error:"User already exists",

            },
        {status:400})
        }
        
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        const newUser =new User({
            username,
            email,
            password:hashedPassword,
            role
        })

        const savedUser = await newUser.save();
        console.log(savedUser)
//send verification email
 await sendEmail({email,emailType:'VERIFY',userId:savedUser._id})



return NextResponse.json({
    message:"User registered successfully",
    success:true,
    data:{

        token: savedUser.token
    }
},{status:200})
}
catch(error:any)
{
    return NextResponse.json(
        {error:error.message},
    {status:500})
}
}

export async function GET(request:NextRequest)
{
return NextResponse.json({
    message:'love you'
})
    
}
export async function PATCH(request:NextRequest,response:NextResponse)
{
    
}
export async function UPDATE(request:NextRequest,response:NextResponse)
{
    
}
export async function DELETE(request:NextRequest,response:NextResponse)
{
    
}