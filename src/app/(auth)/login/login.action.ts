'use server'

import { cookies } from "next/headers";
import {loginType } from "./login.type";
import { get } from "http";
import { getCartItems } from "@/api/services/route.services";

export async function loginAction(data:loginType){
  
  
    try {

     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,{
      method:'post',
      body:JSON.stringify(data),
      headers:{'content-type' :'application/json'}
    })
    const finalData = await res.json() ;
    console.log('finalData : ' , finalData); ;  
    // return finalData  
    const cookie =await cookies() ;
    if(res.ok){
        cookie.set('tkn' ,finalData.token ,{
          httpOnly:true ,
          maxAge: 60 * 60 *24 ,
          sameSite:"lax"
        })
      return true 
    }
    else{
     return false

    }
    

   } catch (error) {
      console.log('eroor : ' ,error);
      
   }
}
export async  function getNumOfICartitems(){
   return getCartItems()
   
}