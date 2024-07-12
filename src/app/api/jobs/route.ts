import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../dbconfig/dbConfig";
import Job from '@/models/jobModel';


export async function POST(req:NextRequest)
{
    const { title, description, budget } :any=await req.json();
console.log(title, description, budget);
    try {
      await connect();
      const job = new Job({ title:title, description:description, budget:budget });
      await job.save();
  
    return NextResponse.json(
        {success:true,
            message:"Message Job successfully posted",
            data:job},{
        status: 200

     })
    } catch (error:any) {
      console.log(error.message);
     return NextResponse.json(
        {success:false,error:error.message},
        {status:500}
      )
    }
}


export async function GET(req:NextRequest)
{
    try {
  
        const jobs = await Job.find({}).limit(10);
       return NextResponse.json({
            success:true,
            message:"Job was successfully retrieved",
            data:jobs
        })
    
       
      } catch (error:any) {
        return NextResponse.json(
            {
                success:false,
                error:error.message
            }
        )
      }

}