"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "./register.schema";
import { type } from "os";
import { registerType } from "./register.type";
import { registerAction } from "./register.action";
import { toast } from "sonner";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGoogle, FaSpinner, FaUserPlus } from "react-icons/fa";
import Link from "next/link";
// import * as z from 'zod'
function getStrength(password:string){
let score = 0 ; 
if(password.length >= 8) score += 20 
if(password.length >= 12) score += 10 
if(password.length >= 16) score += 10
if(/[A-Z]/.test(password)) score += 15
if(/[a-z]/.test(password)) score += 10 
if(/\d/.test(password)) score += 15 
if(/[@$!%*?&]/.test(password)) score += 20 

  return score

}
function getPasswordStyling(score:number){
  if (score < 40 ) return {width:score , color:'#FB2C36',word:'Weak'}
  if (score < 60 ) return {width:score , color:'#FF6900',word:'Fair'}
  if (score < 80 ) return {width:score , color:'#2B7FFF',word:'Good'}
  if (score <= 100 ) return {width:score , color:'#00C950',word:'Strong'}
}
export default function RegisterForm() {
  const router = useRouter();
  const {watch, handleSubmit, control ,formState:{isSubmitting} } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });
  async function mySubmit(data: registerType) {
    // console.log("data", data);
    const isSuccess = await registerAction(data);

    if (isSuccess) {
      toast.success("Account Is Created successfully", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "green",
          color: "white",
          border: "1px solid red",
        },
      });
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } else {
      toast.error("Account Already Exist", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "red",
          color: "white",
          border: "1px solid yellow",
        },
      });
    }
  }
  const passwordValue = watch("password", ""); 
  const passwordStrength = getStrength(passwordValue) ;
  const passwordStyle = getPasswordStyling(passwordStrength) ;

  return (
    <div className="container min-w-100 mx-auto  py-10 px-6 rounded-2xl flex flex-col gap-2 bg-white shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] text-[#364153]">
      <h2 className="text-[30px] leading-9 font-semibold text-center align-middle">
        Create Your Account
      </h2>
      <p className="text-center font-medium align-middle">
        Start your fresh journey with us today
      </p>
      <div className=" py-8 flex gap-2">
        <Button className="px-4 py-2 rounded-lg border border-[#D1D5DC] flex flex-1 justify-center cursor-pointer hover:bg-[#F3F4F6] transition-all duration-500">
          <div className="pr-2 text-[#E7000B] ">
            <FaGoogle size={20} />
          </div>
          <span className="font-semibold text-[#101828] ">Google</span>
        </Button>
        <Button className=" px-4 py-2 rounded-lg border border-[#D1D5DC] flex flex-1 justify-center cursor-pointer hover:bg-[#F3F4F6] transition-all duration-500">
          <div className="pr-2 text-[#155DFC] ">
            <FaFacebook size={20} />
          </div>
          <span className="font-semibold text-[#101828] ">Facebook</span>
        </Button>
      </div>
      <div className="h-0.5 bg-[#D1D5DC4D] flex justify-center ">
        <span className="h-6 px-4 bg-[#FFFFFF] font-medium relative -top-2.75">
          or
        </span>
      </div>
      <form
        className="py-2 flex flex-col gap-6"
        onSubmit={handleSubmit(mySubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="flex flex-col gap-2"
            >
              <FieldLabel
                className="text-[16px] leading-6 font-medium"
                htmlFor="name"
              >
                Name*
              </FieldLabel>
              <Input
                className="py-2.5 px-3 rounded-md border border-[#99A1AF66] text-[16px] leading-6 font-medium focus:border-main-color"
                {...field}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder="Ali"
                autoComplete="off"
              />
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
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="flex flex-col gap-2"
            >
              <FieldLabel
                className="text-[16px] leading-6 font-medium"
                htmlFor="email"
              >
                Email*
              </FieldLabel>
              <Input
                className="py-2.5 px-3 rounded-md border border-[#99A1AF66] text-[16px] leading-6 font-medium focus:border-main-color"
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="ali@example.com"
                autoComplete="off"
              />
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
              data-invalid={fieldState.invalid}
              className="flex flex-col gap-2"
            >
              <FieldLabel
                className="text-[16px] leading-6 font-medium"
                htmlFor="Password"
              >
                Password*
              </FieldLabel>
              <Input
                className="py-2.5 px-3 rounded-md border border-[#99A1AF66] text-[16px] leading-6 font-medium focus:border-main-color"
                {...field}
                id="Password"
                type="password"
                aria-invalid={fieldState.invalid}
                placeholder="create a strong password"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError
                  className="text-red-700"
                  errors={[fieldState.error]}
                />
              )}
              <div>
                <div className="flex gap-2 items-center">
                  <div className={`h-1 w-full rounded-md bg-[#E5E7EB]`}>
                    <div className="h-full transition-all duration-500 ease-in-out" style={{backgroundColor:`${passwordStyle?.color}` || "#E5E7EB" , width:`${passwordStyle?.width || 0 }%`}}></div>
                  </div>
                  <span className="text-[14px] leading-5 font-medium text-[#364153] pr-4">
                    {passwordStyle?.word || "Weak" }
                  </span>
                </div>
                <p className="text-text-color font-medium text-[12px] leading-4 ">
                  Must be at least 8 characters with numbers and symbols
                </p>
              </div>
            </Field>
          )}
        />
        <Controller
          name="rePassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="flex flex-col gap-2"
            >
              <FieldLabel
                className="text-[16px] leading-6 font-medium"
                htmlFor="rePassword"
              >
                Confirm Password*
              </FieldLabel>
              <Input
                className="py-2.5 px-3 rounded-md border border-[#99A1AF66] text-[16px] leading-6 font-medium focus:border-main-color"
                {...field}
                type="password"
                id="rePassword"
                aria-invalid={fieldState.invalid}
                placeholder="confirm your password"
                autoComplete="off"
              />
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
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="flex flex-col gap-2"
            >
              <FieldLabel
                className="text-[16px] leading-6 font-medium"
                htmlFor="phone"
              >
                Phone Number*
              </FieldLabel>
              <Input
                className="py-2.5 px-3 rounded-md border border-[#99A1AF66] text-[16px] leading-6 font-medium focus:border-main-color"
                {...field}
                id="phone"
                aria-invalid={fieldState.invalid}
                placeholder="+1 234 567 8900"
                autoComplete="off"
              />
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
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-main-color focus:ring-main-color"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <span className="text-green-600 font-medium">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-green-600 font-medium">
                    Privacy Policy
                  </span>{" "}
                  *
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
          className="bg-main-color h-10 rounded-lg flex gap-2 items-center justify-center text-white cursor-pointer hover:bg-main-color-hover transition-all duration-300"
        >
          {isSubmitting ? (
            <span className="flex gap-1 items-center">
              <FaSpinner className="animate-spin" /> Creating Account...{" "}
            </span>
          ) : (
            <>
              <FaUserPlus />
              <span className="font-semibold text-[16px] leading-6">
                Create My Account
              </span>
            </>
          )}
        </Button>
      </form>
      <div className="pt-10 border-t border-[#D1D5DC4D] font-medium text-center">
        <p>
          Already have an account?{" "}
          <Link className="text-main-color" href={"/login"}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
