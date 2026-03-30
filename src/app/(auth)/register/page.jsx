import React from "react";
import { Controller } from "react-hook-form";
import RegisterForm from "./RegisterForm";
import { FaShippingFast, FaStar } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import Image from "next/image";
import user from "../../../assets/image/image.png";

export default function Register() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="container max-w-7xl mx-auto p-4 flex flex-col lg:flex-row gap-12 my-10 ">
        <div className="flex gap-2 flex-col text-[#364153]">
          <h1 className="font-bold text-[36px] leading-10">
            Welcome to <span className="text-main-color"> FreshCart</span>
          </h1>
          <p className="mt-2 mb-4 font-medium text-[20px] leading-7 ">
            Join thousands of happy customers who enjoy fresh groceries
            delivered right to their doorstep.
          </p>
          <ul className="py-6 flex flex-col gap-6">
            <li className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12  rounded-full bg-[#BBF7D0] text-main-color">
                <FaStar size={22.5} />
              </div>
              <div>
                <h3 className="font-semibold text-[18px] leading-7">
                  Premium Quality
                </h3>
                <p className="text-[#4A5565] font-medium">
                  Premium quality products sourced from trusted suppliers.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12  rounded-full bg-[#BBF7D0] text-main-color">
                <FaShippingFast size={22.5} />
              </div>
              <div>
                <h3 className="font-semibold text-[18px] leading-7">
                  Fast Delivery
                </h3>
                <p className="text-[#4A5565] font-medium">
                  Same-day delivery available in most areas
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12  rounded-full bg-[#BBF7D0] text-main-color">
                <FaShieldHalved size={22.5} />
              </div>
              <div>
                <h3 className="font-semibold text-[18px] leading-7">
                  Secure Shopping
                </h3>
                <p className="text-[#4A5565] font-medium">
                  Your data and payments are completely secure
                </p>
              </div>
            </li>
          </ul>
          <div className="rounded-md p-4 flex flex-col gap-4 bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12  rounded-full">
                <Image
                  className="max-h-auto w-12 h-12"
                  src={user}
                  alt="user"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="font-medium">Sarah Johnson</h3>
                <div className="pt-1.25 pb-0.75 flex text-[#FFDF20]">
                  <FaStar size={17.5} />
                  <FaStar size={17.5} />
                  <FaStar size={17.5} />
                  <FaStar size={17.5} />
                  <FaStar size={17.5} />
                </div>
              </div>
            </div>
            <p className="italic font-medium text-[#4A5565]">
              &quot;FreshCart has transformed my shopping experience. The
              quality of the products is outstanding, and the delivery is always
              on time. Highly recommend!&quot;
            </p>
          </div>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
}
