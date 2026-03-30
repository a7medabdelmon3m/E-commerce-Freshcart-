import { id } from 'zod/locales';
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import { jwtDecode } from 'jwt-decode';
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    credentialToken?: string;
    id?: string;
  }
  interface Session {
    user: {
      id?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    routeToken?: string;
    id?: string;
  }
}

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    // Facebook(),
    Credentials({
      name: "fresh cart",
      credentials: {
        email: {label:'Email Addresse' , placeholder:'enter your email addresse'},
        password: {},
      },

      authorize: async function (Credentials) {
        const resp = await fetch(
          `https://ecommerce.routemisr.com/api/v1/auth/signin`,
          {
            method: "post",
            body: JSON.stringify(Credentials),
            headers: { "content-type": "application/json" },
          },
        );
        const finalData = await resp.json();
        console.log("the finalDate : ", finalData);

        if (resp.ok && finalData.user) {
          const data:{id:string} = jwtDecode(finalData.token)
          return {
            id: data.id,
            name: finalData.user.name,
            email: finalData.user.email,
            credentialToken:finalData.token
          };
        }

        return null;
      },
    }),
  ],
  callbacks:{
    jwt:function(params){

      if(params.user){
        params.token.routeToken = params.user.credentialToken ;
        params.token.id =params.user.id ;
      }
      // console.log('da el param btana :' , params);
      
      return params.token ;
    },

    session:function(params){
      // params.session.user.id = params.token.routeToken
      // params.session.user.id = params.user.id ;
      params.session.user.id = params.token.id ;
      // console.log('session details :' , params);
      return params.session
      
    }
  },
  jwt:{
    maxAge:60*60*24 
  },
  pages:{
    signIn:'/login'
  },
  secret: process.env.NEXTAUTH_SECRET,
  
};
