"use server";
import { revalidatePath } from "next/cache";
import { decodeAuthanticationUserToken } from "../../app/utils";

export async function addToCart(id: string) {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;
  if (tokenValue) {
    try {
      const resp = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        method: "post",
        headers: { token: tokenValue, "Content-Type": "application/json" },
        body: JSON.stringify({ productId: id }),
      });
      if (resp.ok) {
      }
      const finalData = await resp.json();
      // console.log('finalData of add cart : ',finalData);
      return finalData.numOfCartItems;
    } catch (error) {
      console.log("there is an error during adding product to cart : ", error);
    }
  } else {
    return new Error("sesion is ended!");
  }
}

export async function deleteCartItem(id: string) {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;

  if (tokenValue) {
    try {
      const resp = await fetch(
        `https://ecommerce.routemisr.com/api/v2/cart/${id}`,
        {
          method: "delete",
          headers: {
            token: tokenValue,
          },
        },
      );
      if (resp.ok) {
        const finalData = await resp.json();

        revalidatePath("/cart");
        console.log("de el data bta3 el delete: ", finalData);
        return finalData.numOfCartItems;
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    return new Error("sesion is ended!");
  }
}
export async function updateCount(id: string, newCount: number) {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;

  if (tokenValue) {
    try {
      const resp = await fetch(
        `https://ecommerce.routemisr.com/api/v2/cart/${id}`,
        {
          method: "Put",
          body: JSON.stringify({ count: newCount }),
          headers: {
            token: tokenValue,
            "Content-Type": "application/json",
          },
        },
      );
      if (resp.ok) {
        const finalData = await resp.json();

        revalidatePath("/cart");
        console.log("de el data bta3 el update: ", finalData);
        return finalData.numOfCartItems;
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    return new Error("sesion is ended!");
  }
}
export async function clearUserCart() {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;

  if (tokenValue) {
    try {
      const resp = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
        method: "delete",
        headers: {
          token: tokenValue,
        },
      });
      if (resp.ok) {
        const finalData = await resp.json();

        revalidatePath("/cart");
        // console.log("mabrook el cart etmas7et : ", finalData);
        return finalData.numOfCartItems;
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    return new Error("sesion is ended!");
  }
}
export async function deleteWishListItem(productId: string) {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;

  if (!tokenValue) {
    return { success: false, error: "Session is ended!" };
  }

  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {
        method: "DELETE", // يفضل تتكتب Capital
        headers: {
          token: tokenValue,
        },
      },
    );

    if (resp.ok) {
      const finalData = await resp.json();

      // بنعمل revalidate هنا قبل ما نرجع الداتا
      revalidatePath("/wishlist");

      return { success: true, data: finalData };
    }

    return { success: false, error: "Failed to delete item" };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Something went wrong" };
  }
}
export async function addItemToWishList(productId: string) {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;

  if (!tokenValue) {
    return { success: false, error: "Session is ended!" };
  }

  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        method: "POST",
        body: JSON.stringify({ productId: productId }),
        headers: {
          token: tokenValue,
          "Content-Type": "application/json",
        },
      },
    );

    if (resp.ok) {
      const finalData = await resp.json();

      return { success: true, data: finalData };
    }

    return { success: false, error: "Failed to add product to wishlist" };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Something went wrong" };
  }
}
export async function deleteAddresseItem(addressId: string) {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;

  if (!tokenValue) {
    return { success: false, error: "Session is ended!" };
  }

  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,
      {
        method: "DELETE",
        headers: {
          token: tokenValue,
        },
      },
    );

    if (resp.ok) {
      const finalData = await resp.json();

      revalidatePath("/account/addresses");

      return { success: true, data: finalData };
    }

    return { success: false, error: "Failed to delete item" };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Something went wrong" };
  }
}
export async function addAddresseItem(body: {
  name: string;
  details: string;
  phone: string;
  city: string;
}) {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;

  if (!tokenValue) {
    return { success: false, error: "Session is ended!" };
  }

  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/addresses`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          token: tokenValue,
          "Content-Type": "application/json",
        },
      },
    );

    if (resp.ok) {
      const finalData = await resp.json();

      revalidatePath("/account/addresses");

      return { success: true, data: finalData };
    }
    // console.log('aip resp : ' , (await resp.json()));

    return {
      success: false,
      error: (await resp.json())?.message || "Operation failed, please try again",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error || "Network error or invalid server URL",
    };
  }
}
export async function dynamicApiAction<T>(
  endpoint: string,
  body?: T,
  method: "POST" | "PUT" | "DELETE" | "PATCH" = "POST",
  id?: string | number,
  isNeedToken: boolean = true
) {
  const tokenValue = (await decodeAuthanticationUserToken())?.token;

  if (!tokenValue && isNeedToken) {
    return { success: false, error: "Session is ended!" };
  }
  // const fetchOptions = {
  //   method:method,
  //   headers:{
  //     headers: {
  //         token: tokenValue,
  //         "Content-Type": "application/json",
  //       },
  //   }
  // }
  // if()

  try {
     const headers: HeadersInit = {
      ...(tokenValue ? { token: tokenValue } : {}),
       "Content-Type": "application/json",
    };
    const url = id ? `${endpoint}/${id}` : endpoint;

    const resp = await fetch(url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
     headers
    });

    const finalData = await resp.json().catch(() => null);
    if (resp.ok) {
      

      // revalidatePath("/account/addresses");

      return { success: true, data: finalData };
    }
    console.log('aip resp : ' , finalData);

    return {
      success: false,
      error: finalData || "Failed Action!",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error || "Network error or invalid server URL",
    };
  }
}
