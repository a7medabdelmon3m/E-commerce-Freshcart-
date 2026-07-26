"use client";
import React from "react";
import DynamicFeild from "../account/accountForms/DynamicFeild";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
 
  return (
    <form className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="name"
          >
            Full Name
          </label>

          <input
            placeholder="John Doe"
            required
            name="name"
            id="name"
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email Address
          </label>

          <input
            required
            placeholder="john@example.com"
            name="emial"
            id="emial"
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
          />
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="subject"
        >
          Email Address
        </label>
        <select
          name="subject"
          id="subject"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
        >
            <option value="" selected>Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="order">Order Support</option>
            <option value="shipping">Shipping Question</option>
            <option value="returns">Returns & Refunds</option>
            <option value="product">Product Information</option>
            <option value="feedback">Feedback & Suggestions</option>
            <option value="other">Other</option>
        </select>
       
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none"
        >
          
        </textarea>
       
      </div>
      <Button className="h-auto! w-full md:w-auto inline-flex items-center justify-center gap-2 px-8! py-3.5! rounded-xl bg-green-600 text-white font-semibold hover:bg-primary-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-green-600/20">
      <FaPaperPlane/>
      Send Message
      </Button>
    </form>
  );
}
