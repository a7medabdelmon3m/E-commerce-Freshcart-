'use server'
import { revalidatePath } from 'next/cache';
import { decodeAuthanticationUserToken } from '../utils';
import { CheckoutValues } from './checkout.schema';
export async function createCashOrder(id: string, shippingAddress: CheckoutValues) {
  const tokenValue = await decodeAuthanticationUserToken();

  if (tokenValue) {
    try {
      const resp = await fetch(
        `https://ecommerce.routemisr.com/api/v2/orders/${id}`,
        {
          method: "post",
          body: JSON.stringify(shippingAddress),
          headers: {
            token: tokenValue,
            "Content-Type": "application/json",
          },
        },
      );
      if (resp.ok) {
        const finalData = await resp.json();

        revalidatePath("/cart");
        console.log("el order tam b naga7: ", finalData);
        return true
        // return finalData.numOfCartItems;
      }else{
        return false
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    return new Error("sesion is ended!");
  }
}
export async function createOnlneOrder(id: string, shippingAddress: CheckoutValues) {
  const tokenValue = await decodeAuthanticationUserToken();

  if (tokenValue) {
    try {
      const resp = await fetch(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${process.env.NEXTAUTH_URL}`,
        {
          method: "post",
          body: JSON.stringify(shippingAddress),
          headers: {
            token: tokenValue,
            "Content-Type": "application/json",
          },
        },
      );
      if (resp.ok) {
        const finalData = await resp.json();
        revalidatePath("/cart");
        // console.log("el online order tam b naga7: ", finalData);
        return finalData.session.url ;
        // return finalData.numOfCartItems;
      }else{
        return null
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    return new Error("sesion is ended!");
  }
}