"use client";
import {
  forgetPasswordSchema,
  resetPasswordSchema,
  verifyCodeSchema,
} from "@/app/forget-password/forgetPassword.schemes";
import { forgetPasswordType ,verifyCodeType ,resetPasswordType } from "@/app/forget-password/forgetPassword.types";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import {
  FaArrowLeft,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaKey,
  FaLock,
} from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";

type prop = {
  formType?: "forget-password" | "verify-code" | "reset-password";
  defaultValues?: any;
};

export default function ForgetPasswordForm({
  formType = "forget-password",
  defaultValues = {
    email: "",
  },
}: prop) {
  // {
  //   formType === "forget-password" ? "" : formType === "verify-code" ? "" : "";
  // }
  const selectedSchema =
    formType === "forget-password"
      ? forgetPasswordSchema
      : formType === "verify-code"
        ? verifyCodeSchema
        : resetPasswordSchema;

  
        
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(selectedSchema),
  });

  const mySubmit = (data: forgetPasswordType | verifyCodeType | resetPasswordType) => {
    console.log("forget password data : ", data);
  };
  return (
    <div className="bg-white space-y-8 rounded-2xl p-6 lg:p-12 shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">
      <div className="text-center">
        <div className="flex text-3xl font-bold leading-9 text-black justify-center mb-4">
          <span className="text-main-color">Fresh</span>Cart
        </div>
        <h1 className="text-2xl font-bold leading-8 text-[#1E2939] mb-2 text-center">
          {formType === "forget-password"
            ? "Forgot Password?"
            : formType === "verify-code"
              ? "Check Your Email"
              : "Create New Password"}
        </h1>
        <p className="font-medium text-[#4A5565] text-center">
          {formType === "forget-password"
            ? "No worries, we'll send you a reset code"
            : formType === "verify-code"
              ? "Enter the 6-digit code sent to usama.route@gmail.com"
              : "Your new password must be different from previous passwords"}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center bg-main-color text-white ${formType === "forget-password" && "shadow-[0px_0px_0px_4px_#DCFCE7]"} `}
          >
            <FaEnvelope />
          </div>
          <div className="w-20 h-0.5 px-2">
            <div
              className={`w-16 h-0.5 bg-[#E5E7EB] ${formType === "reset-password" || formType === "verify-code" ? "bg-main-color" : "bg-[#E5E7EB]"}  `}
            ></div>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center  ${formType === "reset-password" || formType === "verify-code" ? "bg-main-color  text-white" : "bg-[#F3F4F6] text-[#99A1AF]"} ${formType === "verify-code" && "shadow-[0px_0px_0px_4px_#DCFCE7]"}`}
          >
            <FaKey />
          </div>
          <div className="w-20 h-0.5 px-2">
            <div
              className={`w-16 h-0.5  ${formType === "reset-password" ? "bg-main-color" : "bg-[#E5E7EB]"}  `}
            ></div>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center ${formType === "reset-password" ? "bg-main-color text-white " : "bg-[#F3F4F6] text-[#99A1AF]"} ${formType === "reset-password" && "shadow-[0px_0px_0px_4px_#DCFCE7]"} `}
          >
            <FaLock />
          </div>
        </div>
      </div>
      {/* onSubmit={handleSubmit(mySubmit)} */}
      <form onSubmit={handleSubmit(mySubmit)} className="space-y-6">
        {formType === "forget-password" ? (
          <ForgetPasswordFeild
            control={control}
            label="Email Address"
            name="email"
            placeholder="Enter your email address"
            id="_email"
            type="email"
          />
        ) : formType === "verify-code" ? (
          <div>
            <ForgetPasswordFeild
              control={control}
              label="Verification Code"
              name="code"
              placeholder="••••••"
              id="_code"
              type="text"
            />
            
          </div>
        ) : (
          <>
            <ForgetPasswordFeild
              control={control}
              label="New Password"
              name="new_password"
              placeholder="Enter new password"
              id="_new_password"
              type="password"
            />
            <ForgetPasswordFeild
              control={control}
              label="Confirm Password"
              name="confirm_password"
              placeholder="Confirm new password"
              id="_confirm_password"
              type="password"
            />
          </>
        )}

        {formType === 'verify-code' && 
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Didn&apos;t receive the code?<Button className=" h-auto! p-0! text-green-600 hover:text-primary-700 font-semibold transition-colors">Resend Code</Button>
            </p>
          </div>
        }

        <Button className="h-auto! w-full rounded-xl py-3 px-4 bg-main-color hover:bg-main-color-hover transition-colors duration-100 text-white font-semibold text-sm lg:text-lg leading-7 shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
          {formType === "forget-password"
            ? "Send Reset Code"
            : formType === "verify-code"
              ? "Verify Code"
              : "Reset Password"}
        </Button>
        {formType === "forget-password" ? (
          <div className="text-center pt-[0.5px] pb-0.75">
            <Link
              className="inline-flex gap-2 items-center text-sm leading-5 font-medium text-main-color"
              href={`/login`}
            >
              <FaArrowLeft />
              Back to Sign In
            </Link>
          </div>
        ) : formType === "verify-code" ? (
          <div className="text-center pt-[0.5px] pb-0.75">
            <Link
              className="inline-flex gap-2 items-center text-sm leading-5 font-medium text-text-color"
              href={`/forget-password`}
            >
              <FaArrowLeft />
              Change email address
            </Link>
          </div>
        ) : (
          ""
        )}
      </form>
      {formType === "forget-password" && (
        <div className="border-t border-[#F3F4F6] pt-6  text-center">
          <p className="font-medium text-gray-600 text-sm lg:text-[16px]  ">
            Remember your password?{" "}
            <Link href={`/login`} className="font-semibold text-main-color! ">
              Sign In
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
type feildProp = {
  control: Control;
  type?: string;
  label: string;
  placeholder: string;
  name: string;
  id?: string;
};
function ForgetPasswordFeild({
  control,
  label,
  name,
  placeholder,
  id,
  type = "text",
}: feildProp) {
  const [isShown, setisShown] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field
          className="flex flex-col gap-2"
          data-invalid={fieldState.invalid}
        >
          <FieldLabel
            className="text-[14px] leading-5 font-medium text-[#364153]"
            htmlFor={id || String(name)}
          >
            {label}
          </FieldLabel>
          <div className="relative">
            <Input
              className={` ${name === "code" ? "px-3" : "pl-12"}  py-3   h-auto ${type === "password" ? "pr-12" : "pr-4"} ${name === "code" ? "placeholder:text-2xl placeholder:font-medium placeholder:text-[#36415380] placeholder:text-center  text-center text-2xl tracking-[0.5em] font-mono" : "placeholder:text-xs lg:placeholder:text-[16px]"}   rounded-xl border border-[#E5E7EB] text-[16px]! leading-6! font-medium! focus:border-main-color`}
              {...field}
              id={id || String(name)}
              aria-invalid={fieldState.invalid}
              placeholder={placeholder}
              autoComplete="off"
              type={isShown && type === "password" ? "text" : type}
              maxLength={name === 'code' ? 6 : 10000}
            />
            <div className="absolute top-4.5 left-4 text-[#99A1AF] cursor-pointer">
              {name === 'code' ? <FaShieldHalved/>: <FaEnvelope />}
                
              </div>

            {type === "password" && (
              <div
                onClick={() => setisShown(!isShown)}
                className="absolute top-4.5 right-4 text-[#99A1AF] cursor-pointer"
              >
                {isShown ? <FaEyeSlash /> : <FaEye />}
              </div>
            )}
          </div>
          {fieldState.invalid && (
            <FieldError className="text-red-700" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}
