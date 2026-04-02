import next from "next";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function decodeAuthanticationUserToken(): Promise<{
  token: string | undefined;
  userId: string | undefined;
} | null> {
  const cookie = await cookies();
  // const nextAuthToken = cookie.get('next-auth.session-token')?.value  || cookie.get("next-auth.session-token")?.value;
  const nextAuthToken =
    cookie.get("__Secure-next-auth.session-token")?.value ||
    cookie.get("next-auth.session-token")?.value;

  const jwtRes = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token: nextAuthToken,
  });

  if (jwtRes) {
    console.log("da el user id ya 3am", jwtRes.id);

    return { token: jwtRes.routeToken, userId: jwtRes.id };
  } else {
    return null;
  }
}
