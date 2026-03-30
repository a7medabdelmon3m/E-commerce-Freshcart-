import { decodeAuthanticationUserToken } from "@/app/utils";
import { cartItemType, productCategory, productType } from "../types";
import { log } from "console";

export async function getAllProducts(): Promise<productType[] | undefined> {
  try {
    const resp = await fetch("https://ecommerce.routemisr.com/api/v1/products");
    const finalData = await resp.json();
    // console.log('finalData :' , finalData);
    return finalData.data;
  } catch (error) {
    console.log("error : ", error);
  }
}

export async function getProductDetails(
  id: string,
): Promise<productType | undefined> {
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    );
    const finalData = await resp.json();
    // console.log('finalData :' , finalData);
    return finalData.data;
  } catch (error) {
    console.log("error : ", error);
  }
}
export async function getAllCategories(): Promise<
  productCategory[] | undefined
> {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories`,
    );
    const finalData = await resp.json();
    // console.log('finalData :' , finalData.data);
    return finalData.data;
  } catch (error) {
    console.log("error : ", error);
  }
}
export async function getCartItems(): Promise<cartItemType| undefined > {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const tokenValue = await decodeAuthanticationUserToken();
  if (tokenValue) {
    // console.log('da el token ',tokenValue);
    
    try {
      const resp = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: { token: tokenValue },
        next:{
          tags:['getCartItems']
        }
      });
      const finalData = await resp.json();
      console.log("el cart items :", finalData.data);
      return finalData.data;
    } catch (error) {
      console.log("error : ", error);
    }
  } else {
    return undefined;
  }
}
