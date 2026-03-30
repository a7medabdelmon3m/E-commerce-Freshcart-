import React from "react";
import { Controller } from "react-hook-form";
import RegisterForm from "./LoginForm";
import { FaClock, FaShippingFast, FaStar, FaTruck } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import Image from "next/image";
import user from '../../../assets/image/image.png'
import LoginForm from "./LoginForm";
import fruitCart from '../../../assets/image/fruit cart.png'

export default function Login() {
  return (
    <section className="container mx-auto px-4 py-16">
        <div className="container max-w-7xl mx-auto grid lg:grid-cols-2  gap-12">
      
        <div className=" hidden lg:flex flex-col gap-6 ">
            <div>
              <Image className="w-full h-96 object-cover rounded-2xl shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]" src={fruitCart} alt="fruit cart"></Image>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-[#1E2939] font-bold text-[30px] leading-9 text-center">FreshCart - Your One-Stop Shop for Fresh Products</h2>
                <p className="text-[#4A5565] font-medium text-lg leading-7 text-center">Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>
                <div className="flex gap-8 justify-center">
                    <div className="flex gap-2 text-main-color">  
                        <FaTruck size={17.5}/>
                        <span className="text-text-color text-[14px] leading-5 font-medium">Free Delivery</span>
                        
                    </div>
                    <div className="flex gap-2 text-main-color">  
                        <FaShieldHalved size={17.5}/>
                        <span className="text-text-color text-[14px] leading-5 font-medium">Secure Payment</span>
                        
                    </div>
                    <div className="flex gap-2 text-main-color">  
                        <FaClock size={17.5}/>
                        <span className="text-text-color text-[14px] leading-5 font-medium">24/7 Support</span>
                        
                    </div>
                </div>
            </div>
        </div>
      <LoginForm />
    </div>
    </section>
    
  );
}
