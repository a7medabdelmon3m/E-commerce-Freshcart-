import Image from "next/image";
import React from "react";
import logo from "@/assets/image/Component 1.svg";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import FooterList from "../footerList/FooterList";
import { HiCreditCard } from "react-icons/hi";

export default function Footer() {
  const categorieLinks:string[] = [
    'All Products',
    'Categories',
    'Brands',
    'Electronics',
    "Men's Fashion",
    "Women's Fashion",
  ]

const accountLinks:string[] = [
  "My Account",
  "Order History",
  "Wishlist",
  "Shopping Cart",
  "Sign In",
  "Create Account"
];

const supportLinks:string[] = [
  "Contact Us",
  "Help Center",
  "Shipping Info",
  "Returns & Refunds",
  "Track Order"
];

const legalLinks:string[] = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy"
];
  return (
    <div className="bg-[#101828]">
      <div className="container mx-auto px-4 py-12 ">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="relative w-fit py-2 px-4 rounded-lg bg-[#FFFFFF] inline-blockmb-6 mb-6">
              <Image src={logo} className="h-8 w-41.25" alt="FreshCard logo"></Image>
            </div>
            <p className="text-[#99A1AF] text-[14px] leading-5.5 font-medium mb-6">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="#"
                className="flex gap-3 text-[#99A1AF] text-[14px] font-medium leading-5 hover:text-main-color"
              >
                <span className="text-[#22C55E]">
                  <FaPhoneAlt />
                </span>
                <span>+1 (800) 123-4567</span>
              </a>
              <a
                href="#"
                className="flex gap-3 text-[#99A1AF] text-[14px] font-medium leading-5 hover:text-main-color"
              >
                <span className="text-[#22C55E]">
                  <IoMdMail />
                </span>
                <span>support@freshcart.com</span>
              </a>
              <p
                
                className="flex gap-3 text-[#99A1AF] text-[14px] font-medium leading-5"
              >
                <span className="text-[#22C55E]">
                  <FaLocationDot />
                </span>
                <span>123 Commerce Street, New York, NY 10001</span>
              </p>
            </div>
            <div className="flex gap-3">
                <a className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1E2939] hover:bg-main-color text-[#99A1AF] hover:text-white" href="#">
                    <FaFacebookF/>
                </a>
                <a className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1E2939] hover:bg-main-color text-[#99A1AF] hover:text-white" href="#">
                    <FaTwitter/>
                </a>
                <a className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1E2939] hover:bg-main-color text-[#99A1AF] hover:text-white" href="#">
                    <FaInstagram/>
                </a>
                <a className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1E2939] hover:bg-main-color text-[#99A1AF] hover:text-white" href="#">
                    <FaYoutube/>
                </a>
            </div>
          </div>
            <FooterList listHeader="Shop" listItems={categorieLinks}/>
            <FooterList listHeader="Account" listItems={accountLinks}/>
            <FooterList listHeader="Support" listItems={supportLinks}/>
            <FooterList listHeader="Legal" listItems={legalLinks}/>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6 border-t border-[#1E2939]">
        <div className="flex flex-col md:flex-row items-center md:justify-between text-text-color font-medium text-[14px] leading-5">
          <p>© 2026 FreshCart. All rights reserved.</p>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <HiCreditCard />
              Visa
            </div>
            <div className="flex gap-2">
              <HiCreditCard />
              Mastercard
            </div>
            <div className="flex gap-2">
              <HiCreditCard />
              PayPal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
