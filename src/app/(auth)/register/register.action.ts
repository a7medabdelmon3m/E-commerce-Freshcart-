'use server'

import { registerType } from "./register.type";

export async function registerAction(data:registerType){
    try {

     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
      method:'post',
      body:JSON.stringify(data),
      headers:{'content-type' :'application/json'}
    })
    const finalData = await res.json() ;
    console.log('finalData : ' , finalData); ;  
    // return finalData  
    if(res.ok){
      ///
      return true 
    }
    else{
     return false

    }
    

   } catch (error) {
      console.log('eroor : ' ,error);
      
   }
}