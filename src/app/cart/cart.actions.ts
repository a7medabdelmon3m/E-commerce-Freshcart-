"use server";
import { revalidatePath } from "next/cache";
import { decodeAuthanticationUserToken } from "../utils";

export async function addToCart(id: string) {
  const tokenValue = await decodeAuthanticationUserToken();
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
  const tokenValue = await decodeAuthanticationUserToken();

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
  const tokenValue = await decodeAuthanticationUserToken();

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
  const tokenValue = await decodeAuthanticationUserToken();

  if (tokenValue) {
    try {
      const resp = await fetch(
        `https://ecommerce.routemisr.com/api/v2/cart`,
        {
          method: "delete",
          headers: {
            token: tokenValue
          },
        },
      );
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
