"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "./login.schema";
import { type } from "os";
import { loginType } from "./login.type";
import { getNumOfICartitems, loginAction } from "./login.action";
import { toast } from "react-toastify";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaLock,
  FaSpinner,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { cartContextType, useCartContext } from "@/app/_context/CartContext";
// import * as z from 'zod'

export default function LoginForm() {
   const{updateNumOfCartItems} =  (useCartContext() as cartContextType)
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  async function mySubmit(data: loginType) {

    const resp = await signIn('credentials' , {redirect:false , /*callbackUrl:'/'*/ ...data})
    if(resp?.ok){

      const resp = await getNumOfICartitems()
      updateNumOfCartItems(resp?.products.length as number)
         toast.success("Login Successful");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }else{
         toast.error("Email Or Password Is Incorrect");
    }
    // console.log("data", data);
    // const isSuccess = await loginAction(data);

    // if (isSuccess) {
    //   toast.success("Welcome Back To Freshcart", {
    //     position: "top-right",
    //     duration: 3000,
    //     style: {
    //       background: "green",
    //       color: "white",
    //       border: "1px solid red",
    //     },
    //   });
    //   setTimeout(() => {
    //     router.push("/");
    //   }, 3000);
    // } else {
    //   toast.error("Email Or Password Is Incorrect", {
    //     position: "top-right",
    //     duration: 3000,
    //     style: {
    //       background: "red",
    //       color: "white",
    //       border: "1px solid yellow",
    //     },
    //   });
    // }
  }

  return (
    <div className="bg-[#FFFFFF] p-8 lg:p-12 rounded-2xl shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">
      <div className="text-center">
        <div className="text-3xl font-bold leading-9 text-main-color mb-4">
          Fresh<span className="text-[#1E2939]">Cart</span>
        </div>
        <h1 className="text-2xl font-bold leading-8 text-[#1E2939] mb-2 ">
          Welcome Back!
        </h1>
        <p className="font-medium">
          Sign in to continue your fresh shopping experience
        </p>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        <Button className="px-4 py-3 rounded-xl border border-[#D1D5DC] flex flex-1 justify-center cursor-pointer hover:bg-[#F3F4F6] transition-all duration-500">
          <div className=" text-[#E7000B] ">
            <FaGoogle size={20} />
          </div>
          <span className="font-medium text-[#101828] ">Google</span>
        </Button>
        <Button className=" px-4 py-3 rounded-xl border border-[#D1D5DC] flex flex-1 justify-center cursor-pointer hover:bg-[#F3F4F6] transition-all duration-500">
          <div className=" text-[#155DFC] ">
            <FaFacebook size={20} />
          </div>
          <span className="font-medium text-[#101828] ">Facebook</span>
        </Button>
      </div>
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px border-t border-[#E5E7EB]"></div>
        </div>
        <div className="relative text-text-color font-medium text-[14px] leading-5 text-center">
          <span className="px-4 bg-[#FFFFFF]">OR CONTINUE WITH EMAIL</span>
        </div>
      </div>

      <form
        className="py-2 flex flex-col gap-6"
        onSubmit={handleSubmit(mySubmit)}
      >
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field
              className="flex flex-col gap-2"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel
                className="text-[14px] leading-5 font-semibold"
                htmlFor="email"
              >
                Email Address
              </FieldLabel>
              <div className="relative">
                <Input
                  className="py-3.25 pl-12 pr-4 h-auto placeholder:text-[16px] rounded-xl border-2 border-[#E5E7EB] text-[16px]! leading-6! font-medium! focus:border-main-color"
                  {...field}
                  id="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="ali@example.com"
                  autoComplete="off"
                />
                <div className="absolute top-4.5 left-4 text-[#99A1AF]">
                  <FaEnvelope />
                </div>
              </div>
              {fieldState.invalid && (
                <FieldError
                  className="text-red-700"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field
              className="flex flex-col gap-2"
              data-invalid={fieldState.invalid}
            >
              <div className="flex justify-between">
                <FieldLabel
                  className="text-[14px] leading-5 font-semibold"
                  htmlFor="Password"
                >
                  Password
                </FieldLabel>
                <Link
                  className="text-main-color text-[14px] leading-5 font-medium hover:text-main-color-hover"
                  href={"/forget-password"}
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  className="py-3.25 px-12 h-auto placeholder:text-[16px] rounded-xl border-2 border-[#E5E7EB] text-[16px]! leading-6! font-medium! focus:border-main-color"
                  {...field}
                  id="Password"
                  type={passwordIsShown ? "text" : "password"}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                  autoComplete="off"
                />
                <div className="absolute top-4.5 left-4 text-[#99A1AF]">
                  <FaLock />
                </div>
                <div onClick={() =>{setPasswordIsShown(!passwordIsShown)}} className="absolute top-4.5 right-4 text-[#99A1AF]">
                  {!passwordIsShown ? (
                    <FaEyeSlash  className="hover:text-[#4A5565]" />
                  ) : (
                    <FaEye  className="hover:text-[#4A5565]" />
                  )}
                </div>
              </div>
              {fieldState.invalid && (
                <FieldError
                  className="text-red-700"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />
        <Controller
          name="terms"
          control={control}
          render={({ field, fieldState }) => (
            <div className="flex flex-col gap-2 ">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-main-color focus:ring-main-color"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Keep me signed in
                </label>
              </div>

              {fieldState.invalid && (
                <span className="text-red-700 text-xs italic">
                  {fieldState.error?.message}
                </span>
              )}
            </div>
          )}
        />

        <Button
          disabled={isSubmitting}
          className="bg-main-color px-6 py-3 rounded-xl flex items-center justify-center text-white text[18px]! leading-7! font-semibold! cursor-pointer hover:bg-main-color-hover transition-all duration-300 h-auto"
        >
          {isSubmitting ? (
            <span className="flex gap-1 items-center">
              <FaSpinner className="animate-spin" /> Signing In...{" "}
            </span>
          ) : (
            <span>Sign In</span>
          )}
        </Button>
      </form>
      <div className="border-t border-[#F3F4F6] mb-6 pt-6 flex items-center justify-center gap-2">
        <p>New to FreshCart?</p>
        <Link
          className="text-main-color text-[14px] leading-5 font-medium hover:text-main-color-hover"
          href={"/register"}
        >
          Create an account
        </Link>
      </div>
      <div className="flex gap-6 justify-center">
        <div className="flex gap-1 text-text-color text-[12px] leading-4 font-medium">
          <FaLock />
          <span>SSL Secured</span>
        </div>
        <div className="flex gap-1 text-text-color text-[12px] leading-4 font-medium">
          <FaUsers />
          <span>50K+ Users</span>
        </div>
        <div className="flex gap-1 text-text-color text-[12px] leading-4 font-medium">
          <FaStar />
          <span>4.9 Rating</span>
        </div>
      </div>
    </div>
  );
}
