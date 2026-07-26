import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";

export default function ForgetPasswordImage() {
  return (
    <div className="text-center space-y-6 hidden lg:block">
      <div className="w-full rounded-2xl bg-linear-to-r from-[#F0FDF4] via-[#F0FDF4] to-[#F3F4F6] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] relative flex justify-center pt-29 pb-29.5">
        <div className="absolute w-24 h-24 rounded-full bg-[#DCFCE780] top-8 left-8"></div>
        <div className="absolute w-32 h-32 rounded-full bg-[#DCFCE780] bottom-12 right-10"></div>
        <div className="absolute w-16 h-16 rounded-full bg-[#DCFCE780] top-20 right-20"></div>
        <div className="relative space-y-[21.14px]">
          <div className="w-28 h-28 rounded-3xl rotate-3 bg-[#FFFFFF]  relative flex justify-center items-center">
            <div className="w-28 h-28 rounded-3xl rotate-3 bg-[#FFFFFF01] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] absolute"></div>
            <div className="w-20 h-20 rounded-2xl rotate-3 bg-main-color-subtle flex justify-center items-center text-main-color">
              <FaLock className="rotate-3 text-3xl" />
            </div>
          </div>
          <div className="flex gap-3 justify-center animate-pulse">
            <div className="bg-[#4ADE80] w-3 h-3 rounded-full animate-pulse "></div>
            <div className="bg-[#22C55E] w-3 h-3 rounded-full animate-pulse [animation-delay:150ms]"></div>
            <div className="bg-main-color w-3 h-3 rounded-full animate-pulse [animation-delay:300ms]"></div>
          </div>
          <div className="absolute right-full -translate-x-2 top-3.5 text-xl flex justify-center items-center w-14 h-14 rounded-xl -rotate-12 bg-[#FFFFFF] text-main-color shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
            <FaEnvelope />
          </div>
          <div className="absolute left-full translate-x-2 top-7 text-xl flex justify-center items-center w-14 h-14 rounded-xl rotate-12 bg-[#FFFFFF] text-main-color shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
            <FaShieldHalved />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-3xl leading-9 text-[#1E2939]">
          Reset Your Password
        </h2>
        <p className="font-medium text-lg leading-7 text-[#4A5565]">
          Don&apos;t worry, it happens to the best of us. We&apos;ll help you
          get back into your account in no time.
        </p>
        <div className="flex justify-center">
          <div className="flex pr-8">
            <div className="flex text-sm leading-5 font-medium text-text-color items-center ">
              <FaEnvelope className="text-main-color text-2xl pr-2" />
              Email Verification
            </div>
          </div>
          <div className="flex pr-8">
            <div className="flex text-sm leading-5 font-medium text-text-color items-center ">
              <FaShieldHalved className="text-main-color text-2xl pr-2" />
              Secure Reset
            </div>
          </div>
          <div className="flex pr-8">
            <div className="flex text-sm leading-5 font-medium text-text-color items-center ">
              <FaLock className="text-main-color text-2xl pr-2" />
              Encrypted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
