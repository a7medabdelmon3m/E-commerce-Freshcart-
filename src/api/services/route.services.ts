import { id } from "zod/locales";
import { decodeAuthanticationUserToken } from "@/app/utils";
import {
  cartItemType,
  orderType,
  productBrand,
  productCategory,
  productType,
  subCategoryType,
} from "../types";
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
export async function getAllBrands(): Promise<productBrand[] | undefined> {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  try {
    const resp = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
    const finalData = await resp.json();
    // console.log('brands list :' , finalData.data);
    return finalData.data;
  } catch (error) {
    console.log("error : ", error);
  }
}
export async function getSpecificBrand(id:string): Promise<
   productBrand | undefined
> {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
    );
    const finalData = await resp.json();
    // console.log('specific brand :' , finalData.data);
    return finalData.data;
  } catch (error) {
    console.log("error : ", error);
  }
}
export async function getSubCategory(id:string): Promise<
   subCategoryType[] | undefined
> {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
    );
    const finalData = await resp.json();
    // console.log('specific brand :' , finalData.data);
    return finalData.data;
  } catch (error) {
    console.log("error : ", error);
  }
}
export async function getSpecificCategory(id:string): Promise<
   productCategory | undefined
> {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
    );
    const finalData = await resp.json();
    // console.log('specific brand :' , finalData.data);
    return finalData.data;
  } catch (error) {
    console.log("error : ", error);
  }
}
export async function getSpecificSubcategory(id:string): Promise<
   subCategoryType | undefined
> {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/subcategories/${id}`,
    );
    const finalData = await resp.json();
    // console.log('specific brand :' , finalData.data);
    return finalData.data;
  } catch (error) {
    console.log("error : ", error);
  }
}
export async function getFillteredProducts(filters: {
  brand?: string;
  price?: string;
  keyword?: string;
  category?: string;
  subcategory?: string;
}): Promise<productType[] | undefined> {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const queryParams = new URLSearchParams();

  if (filters.brand) queryParams.append("brand", filters.brand);
  if (filters.price) queryParams.append("price[gte]", filters.price); 
  if (filters.keyword) queryParams.append("keyword", filters.keyword);
  if (filters.category) queryParams.append("category", filters.category);
  if (filters.subcategory) queryParams.append("subcategory", filters.subcategory);
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?${queryParams}`,
    );
    const finalData = await resp.json();
    // console.log('filtered data : ' , finalData.data);
    return finalData.data;
  } catch (error) {
    console.log("error : ", error);
  }
}
export async function getCartItems(): Promise<cartItemType | undefined> {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const tokenValue = (await decodeAuthanticationUserToken())?.token;
  if (tokenValue) {
    // console.log('da el token ',tokenValue);

    try {
      const resp = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: { token: tokenValue },
        next: {
          tags: ["getCartItems"],
        },
      });
      const finalData = await resp.json();
      // console.log("el cart items :", finalData.data);
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
      `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
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
