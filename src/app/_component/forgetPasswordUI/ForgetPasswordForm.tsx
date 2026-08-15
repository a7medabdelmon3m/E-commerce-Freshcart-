"use client";
import { dynamicApiAction } from "@/api/actions/routea.ctions";
import {
  forgetPasswordSchema,
  resetPasswordSchema,
  verifyCodeSchema,
} from "@/app/forget-password/forgetPassword.schemes";
import {
  forgetPasswordType,
  verifyCodeType,
  resetPasswordType,
} from "@/app/forget-password/forgetPassword.types";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import {
  FaArrowLeft,
  FaCheck,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaKey,
  FaLock,
  FaSpinner,
} from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { toast } from "react-toastify";
import { da } from "zod/locales";

type prop = {
  formType?: "forget-password" | "verify-code" | "reset-password";
  defaultValues?: any;
  onStepChange?: (
    step: "forget-password" | "verify-code" | "reset-password",
  ) => void;
};

export default function ForgetPasswordForm({
  formType = "forget-password",
  defaultValues = {
    email: "",
  },
  onStepChange,
}: prop) {
  // {
  //   formType === "forget-password" ? "" : formType === "verify-code" ? "" : "";
  // }
  const [email, setEmail] = useState("");
  const [isReseted, setIsReseted] = useState(false);
  const router = useRouter();
  const selectedSchema =
    formType === "forget-password"
      ? forgetPasswordSchema
      : formType === "verify-code"
        ? verifyCodeSchema
        : resetPasswordSchema;

  function handleNavigation() {
    router.push(`/login`);
  }

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(selectedSchema),
  });

  const mySubmit = async (
    data: forgetPasswordType | verifyCodeType | resetPasswordType,
  ) => {
    let payload: Record<string, any> = { ...data };

    if (formType === "forget-password") {
      const emailValue = (data as forgetPasswordType).email;
      setEmail(emailValue);
      payload = { ...data };
    }

    if (formType === "reset-password") {
      payload = {
        ...(data as resetPasswordType),
        email,
      };
      delete payload.confirm_password;
    }

    console.log("email : ", email);
    console.log("data : ", data);

    const calledEndPoint =
      formType === "forget-password"
        ? `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`
        : formType === "verify-code"
          ? `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`
          : `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`;
    const method = formType === "reset-password" ? "PUT" : "POST";
    const successMsg =
      formType === "forget-password"
        ? "Reset Code Sent To Your Email Successfully!"
        : formType === "verify-code"
          ? "Code Verified!"
          : "Password Reset Successfully!";

    const errorMsg =
      formType === "forget-password"
        ? "Failed To Send Verification Code!"
        : formType === "verify-code"
          ? "Failed To Verify Code "
          : "Failed To Reset Password";
    const resp = await dynamicApiAction(
      calledEndPoint,
      payload,
      method,
      undefined,
      false,
    );
    console.log("resp : ", resp);

    if (resp.success) {
      toast.success(resp?.data?.message || successMsg);
      if (formType === "forget-password") {
        onStepChange?.("verify-code");
      } else if (formType === "verify-code") {
        onStepChange?.("reset-password");
      } else {
        setIsReseted(true);
      }
    } else {
      const errorMessage =
        typeof resp.error === "object"
          ? (resp.error as any)?.message || errorMsg
          : resp.error || errorMsg;
      toast.error(errorMessage);
    }
  };
  if (isReseted) {
    return (
      <div className="isReseted">
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-green-600">
                  Fresh
                  <span className="text-gray-800">Cart</span>
                </span>
              </div>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto text-green-600 text-3xl">
                <FaCheck />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Password Reset!
                </h2>
                <p className="text-gray-600">
                  Your password has been successfully reset. You can now sign in
                  with your new password.
                </p>
              </div>
              <Button
                onClick={handleNavigation}
                className="h-auto! w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Back to Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
              ? `Enter the 6-digit code sent to ${email}`
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
              name="resetCode"
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
              name="newPassword"
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

        {formType === "verify-code" && (
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Didn&apos;t receive the code?
              <Button className=" h-auto! p-0! text-green-600 hover:text-green-700 font-semibold transition-colors">
                Resend Code
              </Button>
            </p>
          </div>
        )}

        <Button
          disabled={isSubmitting}
          className="h-auto! w-full rounded-xl py-3 px-4 bg-main-color hover:bg-main-color-hover transition-colors duration-100 text-white font-semibold text-sm lg:text-lg leading-7 shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]"
        >
          {formType === "forget-password" ? (
            isSubmitting ? (
              <>
                <FaSpinner className="animate-spin" /> Sending Code
              </>
            ) : (
              "Send Reset Code"
            )
          ) : formType === "verify-code" ? (
            isSubmitting ? (
              <>
                <FaSpinner className="animate-spin" /> Verifying...
              </>
            ) : (
              "Verify Code"
            )
          ) : isSubmitting ? (
            <>
              {" "}
              <FaSpinner className="animate-spin" /> Resetting Password...
            </>
          ) : (
            "Reset Password"
          )}
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
              onClick={() => onStepChange?.("forget-password")}
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
              className={` ${name === "resetCode" ? "px-3" : "pl-12"}  py-3   h-auto ${type === "password" ? "pr-12" : "pr-4"} ${name === "resetCode" ? "placeholder:text-2xl placeholder:font-medium placeholder:text-[#36415380] placeholder:text-center  text-center text-2xl tracking-[0.5em] font-mono" : "placeholder:text-xs lg:placeholder:text-[16px]"}   rounded-xl border border-[#E5E7EB] text-[16px]! leading-6! font-medium! focus:border-main-color`}
              {...field}
              id={id || String(name)}
              aria-invalid={fieldState.invalid}
              placeholder={placeholder}
              autoComplete="off"
              type={isShown && type === "password" ? "text" : type}
              maxLength={name === "resetCode" ? 6 : 10000}
            />
            <div className="absolute top-4.5 left-4 text-[#99A1AF] cursor-pointer">
              {name === "resetCode" ? <FaShieldHalved /> : <FaEnvelope />}
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
