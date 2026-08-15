"use client";
import React, { useState } from "react";
import { FaLock, FaSave, FaSpinner, FaUser } from "react-icons/fa";
import DynamicFeild from "./DynamicFeild";
import { Control, FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { changePasswordType } from "@/api/types";
import { dynamicApiAction } from "@/api/actions/routea.ctions";
import { signOut } from "next-auth/react";
import { getNumOfICartitems, getNumOfIWishlist } from "@/app/(auth)/login/login.action";
import { cartContextType, useCartContext } from "@/app/_context/CartContext";
import { useRouter } from "next/navigation";

export default function ChangePasswordForm() {
  const {
      numberOfCartItems,
      updateNumOfCartItems,
      numberOfWishlistItems,
      updateNumOfWishlistItems,
    } = useCartContext() as cartContextType;
    const router = useRouter()
  const [responseMsg, setResponseMsg] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<changePasswordType>({
    defaultValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
  });

  const typedControl = control as unknown as Control<FieldValues>;

  async function submitChanages(data: changePasswordType) {
    // console.log('change password data : ' , data );
    setResponseMsg(null);
    const resp = await dynamicApiAction(
      `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
      data,
      "PUT",
      undefined,
    );

    if (resp.success) {
      setResponseMsg({
        type: "success",
        text: "Password updated successfully!",
      });

      await signOut({ redirect: false });
      const cartItems = await getNumOfICartitems();
      const wishlist = await getNumOfIWishlist();
      updateNumOfCartItems(cartItems?.products.length as number);
      updateNumOfWishlistItems(wishlist?.length as number);
      router.push("/login");
    } else {
      const errorMessage =
        typeof resp.error === "object"
          ? (resp.error as any)?.errors?.msg || "Failed to update Password"
          : resp.error || "Failed to update Password";
      setResponseMsg({
        type: "error",
        text: errorMessage,
      });
    }
  }
  return (
    <div className="rounded-3xl overflow-hidden bg-white border border-[#F3F4F6] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
      <div className="p-6 border-b border-[#F3F4F6] space-y-6">
        <div className="flex gap-4 items-center">
          <div className="w-14 h-14 flex justify-center items-center rounded-2xl bg-[#FEF3C6]">
            <FaUser className="text-[#E17100] w-5 h-6" />
          </div>
          <div className="">
            <h3 className="font-bold text-[#101828]">Change Password</h3>
            <p className="text-sm font-medium leading-5 text-text-color">
              Update your account password
            </p>
          </div>
        </div>
        {responseMsg && (
          <div
            className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
              responseMsg.type === "success"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-red-50 text-red-700 border-red-200"
            }`}
          >
            {responseMsg.text}
          </div>
        )}
        <form className="space-y-5" onSubmit={handleSubmit(submitChanages)}>
          <DynamicFeild
            control={typedControl}
            label="Current Password"
            name="currentPassword"
            placeHolder="Enter your current password"
            id="_curren_password"
            type="password"
            isPassword={true}
            required
          />
          <div>
            <DynamicFeild
              control={typedControl}
              label="New Password"
              name="password"
              placeHolder="Enter your new password"
              id="_new_password"
              type="password"
              isPassword={true}
              required
            />
            <p className="text-xs font-medium leading-4 text-text-color">
              Must be at least 6 characters
            </p>
          </div>

          <DynamicFeild
            control={typedControl}
            label="Confirm New Password"
            name="rePassword"
            placeHolder="Confirm your new password"
            id="_confirm_password"
            type="password"
            isPassword={true}
            required
          />
          <div className="pt-4 ">
            <Button
              disabled={isSubmitting}
              className="h-auto rounded-xl py-3 px-6 inline-flex items-center gap-2 text-white font-semibold shadow-[0px_4px_6px_-4px_#E1710040,0px_10px_15px_-3px_#E1710040] bg-[#E17100] hover:bg-[#E16100] transition-colors duration-100"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className=" animate-spin" />
                  Changing...
                </>
              ) : (
                <>
                  <FaLock />
                  Change Password
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
