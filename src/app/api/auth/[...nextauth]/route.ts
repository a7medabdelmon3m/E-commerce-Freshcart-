import { nextAuthConfig } from "@/nextAuth/nextAuth.config";
import NextAuth from "next-auth";

const routeHandlers =  NextAuth(nextAuthConfig) ; 

export {routeHandlers as GET, routeHandlers as POST} ;