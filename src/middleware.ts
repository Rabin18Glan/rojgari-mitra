import { getToken } from 'next-auth/jwt';
import {NextResponse} from 'next/server';
import { NextRequest } from 'next/server'; 
import {} from 'next-auth/middleware';


export  async function middleware(request:NextRequest)
{
    const path = request.nextUrl.pathname;
    const token = await getToken({req:request});

    const isPublicPath = path == '/login'||path =='/signup'||path=='/verifyemail'||path=='/';
//  const token = request.cookies.get("token")?.value||''

 if(isPublicPath&&token)
{
    return NextResponse.redirect(new URL('/',request.nextUrl)) 
}

if(!isPublicPath&&!token)
    {
        return NextResponse.redirect(new URL('/login',request.url))   
    }

}

export const config = {
    matcher:[
        '/login',
        '/signup',
        '/verifyemail',
        '/profile',
        '/verify/:path*'
    ]
}
