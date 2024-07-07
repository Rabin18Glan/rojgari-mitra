import { NextAuthOptions, Session } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { connect } from '@/dbconfig/dbConfig';
import { Token } from 'next-auth';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import Email from 'next-auth/providers/email';

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" ,name:"email"},
        password: { label: "Password", type: "password", placeholder: "Password",name:'password' },
      },
      async authorize(credentials:any): Promise<any> {

        console.log(credentials)
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("No User found with this email");
          }
          if (!user.isVerified) {
            throw new Error("Please verify your account before login");
          }

          const isPasswordCorrect = await bcryptjs.compare(credentials.password, user.password);
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Incorrect Password");
          }
        } catch (err: any) {
          throw new Error(err.message || "An error occurred during authorization");
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          access_type: 'offline',
          prompt: 'consent',
          response_type: 'code',
        },
      },
    }),
    Email({

    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.isVerified = user.isVerified;
        token.isAcceptingMessages = user.isAcceptingMessages;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token}) {
      if (token) {
        session.user._id = token._id as string | undefined;
        session.user.isVerified = token.isVerified as boolean;
        session.user.isAcceptingMessages = token.isAcceptingMessages as boolean;
        session.user.username = token.username as string | undefined;
      
        return session;

      }
      return session;
    },
    async signIn({user,account,credentials})
    {
        
   if(!user.isVerified)
   {
    return '/verifyemail';
   }

   await User.findByIdAndUpdate(user.id,{lastLoggedIn:new Date()})
   return true
    },
    

  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
