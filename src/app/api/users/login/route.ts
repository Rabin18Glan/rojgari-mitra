import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Ensure database connection
    await connect();

    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return NextResponse.json({
        error: "User not found",
      }, { status: 400 });
    }
    console.log("User found");

    // Validate password
    const validPassword = await bcryptjs.compare(password, user.password); // corrected comparison
    if (!validPassword) {
      console.log("Password does not match");
      return NextResponse.json({
        error: "Password does not match. Check your credentials",
      }, { status: 400 });
    }
    console.log("Password matched");

    // Generate JWT token
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

    // Create response with token cookie
    const response = NextResponse.json({
      message: 'Logged in successfully',
      success: true,
      userData:{
        user_id:user._id,
        name:user.username,
        email:user.email,
        role:user.role

      }

    },{status:200});
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
