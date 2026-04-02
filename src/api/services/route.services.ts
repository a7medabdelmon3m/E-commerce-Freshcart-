import { id } from 'zod/locales';
import { decodeAuthanticationUserToken } from "@/app/utils";
import { cartItemType, orderType, productCategory, productType } from "../types";
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
  const tokenValue = (await decodeAuthanticationUserToken())?.token;
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
export async function getUserOrders(): Promise<orderType[] | undefined> {
  const obj = await decodeAuthanticationUserToken();
  const id = obj?.userId;

  if (!id) return;

  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
    );

    if (!resp.ok) {
      throw new Error("Failed to fetch orders");
    }

    const finalData = await resp.json();

    console.log("orders:", finalData);

    return finalData;
  } catch (error) {
    console.log("error:", error);
    return undefined;
  }
}
// https://ecommerce.routemisr.com/api/v1/orders/user/6407cf6f515bdcf347c09f17
