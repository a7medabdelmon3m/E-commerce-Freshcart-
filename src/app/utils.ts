import next from "next";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function decodeAuthanticationUserToken():Promise<string | null>{
    const cookie = await cookies() ;
    const nextAuthToken = cookie.get('next-auth.session-token')?.value ;

    const jwtRes = await decode({secret:process.env.NEXTAUTH_SECRET! , token:nextAuthToken})

    if(jwtRes){
        return jwtRes.routeToken as string
    }
    else{
        return null
    }


}

