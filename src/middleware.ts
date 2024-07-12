
import {NextResponse} from 'next/server';
import { NextRequest } from 'next/server'; 



export  async function middleware(request:NextRequest)
{
    const path = request.nextUrl.pathname;
    // const token = await getToken({req:request});

    const isPublicPath = path == '/login'||path =='/signup'||path=='/verifyemail';
 const token = request.cookies.get("token")?.value||'';
 console.log(token);

 if(isPublicPath&&token)
{
    return NextResponse.redirect(new URL('/find-work',request.nextUrl
    )) 
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
       
        '/verify/:path*'
    ]
}
