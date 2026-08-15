import { decodeAuthanticationUserToken } from "@/app/utils";
import {
  addresseTaye,
  cartItemType,
  orderType,
  productBrand,
  productCategory,
  ProductResponse,
  productType,
  subCategoryType,
  wishListType,
} from "../types";

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
export async function getSpecificBrand(
  id: string,
): Promise<productBrand | undefined> {
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
export async function getSubCategory(
  id: string,
): Promise<subCategoryType[] | undefined> {
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
export async function getSpecificCategory(
  id: string,
): Promise<productCategory | undefined> {
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
export async function getSpecificSubcategory(
  id: string,
): Promise<subCategoryType | undefined> {
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
  brand?: string | string[];
  category?: string | string[];
  minPrice?: string;
  maxPrice?: string;
  keyword?: string;
  subcategory?: string;
  page?: number;
  sort?: string;
}): Promise<ProductResponse | undefined> {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const queryParams = new URLSearchParams();

  if (filters.brand) {
    const brands = Array.isArray(filters.brand)
      ? filters.brand
      : [filters.brand];
    brands.forEach((b) => queryParams.append("brand", b));
  }

  if (filters.category) {
    const cats = Array.isArray(filters.category)
      ? filters.category
      : [filters.category];
    cats.forEach((c) => queryParams.append("category", c));
  }

  if (filters.minPrice) queryParams.append("price[gte]", filters.minPrice);
  if (filters.maxPrice) queryParams.append("price[lte]", filters.maxPrice);

  if (filters.keyword) queryParams.append("keyword", filters.keyword);
  if (filters.sort) queryParams.append("sort", filters.sort);
  if (filters.subcategory)
    queryParams.append("subcategory", filters.subcategory);
  if (filters.page) queryParams.append("page", filters.page.toString());
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?${decodeURIComponent(queryParams.toString())}`,
      { cache: "no-store" },
    );
    const finalData = await resp.json();
    // console.log('filtered data : ' , finalData.data);
    return finalData;
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
export async function getUserWishlist(): Promise<wishListType[] | undefined> {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;
  if (tokenValue) {
    // console.log('da el token ',tokenValue);

    try {
      const resp = await fetch(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          headers: { token: tokenValue },
          next: {
            tags: ["getUserWhishlist"],
          },
        },
      );

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
export async function getUserAddresses(): Promise<addresseTaye[] | undefined> {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;
  if (tokenValue) {
    // console.log('da el token ',tokenValue);

    try {
      const resp = await fetch(
        `https://ecommerce.routemisr.com/api/v1/addresses`,
        {
          headers: { token: tokenValue },
          next: {
            tags: ["getUserAddresses"],
          },
        },
      );
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

interface returnedType<T> {
  success: boolean;
  error?: string;
  data?: T;
}
export async function dynamicApiService<T = unknown>(
  endPoint: string,
  isTokenNeeded: boolean = true,
  isMetaDataNeeded: boolean = false,
  tags: string[],
): Promise<returnedType<T> | undefined> {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;

  if (!tokenValue && isTokenNeeded) {
    return { success: false, error: "Session is ended!" };
  }

  // console.log('da el token ',tokenValue);

  try {
    const headers: HeadersInit = {
      ...(tokenValue ? { token: tokenValue } : {}),
    };

    const resp = await fetch(endPoint, {
      headers,
      next: {
        tags: tags,
      },
    });

    const finalData = await resp.json().catch(() => null);

    if (resp.ok) {
      return {
        success: true,
        data: isMetaDataNeeded ? finalData : finalData.data,
      };
    }

    return {
      success: false,
      error: finalData || "Failed Action!",
    };
  } catch (error) {
    console.log("error : ", error);
    return {
      success: false,
      error: "Network error or invalid server URL",
    };
  }
}
