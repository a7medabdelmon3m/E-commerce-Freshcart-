"use client";
import React from "react";
import { FaLock, FaSave, FaUser } from "react-icons/fa";
import DynamicFeild from "./DynamicFeild";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export default function ChangePasswordForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({});
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
        <form className="space-y-5">
          <DynamicFeild
            control={control}
            label="Current Password"
            name="curren_password"
            placeHolder="Enter your current password"
            id="_curren_password"
            type="password"
            isPassword={true}
          />
          <div>
            <DynamicFeild
              control={control}
              label="New Password"
              name="new_password"
              placeHolder="Enter your new password"
              id="_new_password"
              type="password"
              isPassword={true}
            />
            <p className="text-xs font-medium leading-4 text-text-color">Must be at least 6 characters</p>
          </div>

          <DynamicFeild
            control={control}
            label="Confirm New Password"
            name="confirm_password"
            placeHolder="Confirm your new password"
            id="_confirm_password"
            type="password"
            isPassword={true}
          />
          <div className="pt-4 ">
            <Button className="h-auto rounded-xl py-3 px-6 inline-flex items-center gap-2 text-white font-semibold shadow-[0px_4px_6px_-4px_#E1710040,0px_10px_15px_-3px_#E1710040] bg-[#E17100] hover:bg-[#E16100] transition-colors duration-100">
              <FaLock />
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
