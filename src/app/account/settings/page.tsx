import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import PageHeader from "@/app/_component/PageHeader";
import ProfileInfoForm from "../accountForms/ProfileInfoForm";
import ChangePasswordForm from "../accountForms/ChangePasswordForm";

export default function Page() {
  return (
    <div className="flex-1">
            <div className="space-y-6">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold leading-7 text-[#101828]">Account Settings</h2>
                    <p className="font-medium text-sm leading-5 text-text-color">Update your profile information and change your password</p>
                </div>
                <ProfileInfoForm/>
                <ChangePasswordForm/>
            </div>
          </div>
  );
}
