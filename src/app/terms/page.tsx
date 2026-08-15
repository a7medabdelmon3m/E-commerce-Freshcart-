import React, { ReactNode } from "react";
import PageHeader from "../_component/PageHeader";
import {
  FaHandshake,
  FaUserCheck,
  FaIdCard,
  FaCreditCard,
  FaTruck,
  FaArrowRotateLeft,
  FaScaleBalanced,
  FaEnvelope,
} from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import { FaArrowLeft, FaFileContract } from "react-icons/fa";
import Section from "../privacy/Section";

export interface PolicySection {
  icon: IconType;
  title: string;
  items?: {
    title: string;
    desc: string;
  }[];
  text?: ReactNode;
}

export const termsOfServiceData: PolicySection[] = [
  {
    icon: FaHandshake,
    title: "Acceptance of Terms",
    items: [
      {
        title: "",
        desc: "By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.",
      },
      {
        title: "",
        desc: "If you do not agree to these Terms, you must not access or use the Service.",
      },
      {
        title: "",
        desc: "We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.",
      },
    ],
  },
  {
    icon: FaUserCheck,
    title: "User Eligibility",
    items: [
      {
        title: "",
        desc: "The Service is intended for users who are at least eighteen (18) years of age.",
      },
      {
        title: "",
        desc: "By using the Service, you represent and warrant that you are of legal age to form a binding contract.",
      },
      {
        title: "",
        desc: "If you are accessing the Service on behalf of a legal entity, you represent that you have the authority to bind such entity.",
      },
    ],
  },
  {
    icon: FaIdCard,
    title: "Account Registration",
    items: [
      {
        title: "",
        desc: "You may be required to create an account to access certain features of the Service.",
      },
      {
        title: "",
        desc: "You agree to provide accurate, current, and complete information during registration.",
      },
      {
        title: "",
        desc: "You are solely responsible for maintaining the confidentiality of your account credentials.",
      },
      {
        title: "",
        desc: "You agree to notify us immediately of any unauthorized use of your account.",
      },
    ],
  },
  {
    icon: FaCreditCard,
    title: "Orders and Payments",
    items: [
      {
        title: "",
        desc: "All orders placed through the Service are subject to acceptance and availability.",
      },
      {
        title: "",
        desc: "Prices are subject to change without notice prior to order confirmation.",
      },
      {
        title: "",
        desc: "Payment must be made in full at the time of purchase through approved payment methods.",
      },
      {
        title: "",
        desc: "We reserve the right to refuse or cancel any order at our sole discretion.",
      },
    ],
  },
  {
    icon: FaTruck,
    title: "Shipping and Delivery",
    items: [
      {
        title: "",
        desc: "Shipping times are estimates only and are not guaranteed.",
      },
      {
        title: "",
        desc: "Risk of loss and title for items purchased pass to you upon delivery to the carrier.",
      },
      {
        title: "",
        desc: "We are not responsible for delays caused by carriers, customs, or other factors beyond our control.",
      },
    ],
  },
  {
    icon: FaArrowRotateLeft,
    title: "Returns and Refunds",
    items: [
      {
        title: "",
        desc: "Our return policy allows returns within 14 days of delivery for most items.",
      },
      {
        title: "",
        desc: "Products must be unused and in original packaging.",
      },
      {
        title: "",
        desc: "Refunds will be processed within 5-7 business days after receiving the returned item.",
      },
    ],
  },
  {
    icon: FaScaleBalanced,
    title: "Limitation of Liability",
    text: (
      <span>
        To the maximum extent permitted by applicable law, FreshCart shall not
        be liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of profits or revenues, whether incurred
        directly or indirectly.
      </span>
    ),
  },
  {
    icon: FaEnvelope,
    title: "Contact Us",
    text: <span>If you have any questions about these Terms, please contact us at <Link className="text-green-600 hover:text-green-700 font-semibold hover:underline" href='mailto:support@freshcart.com'>support@freshcart.com</Link></span>,
  },
];

export default function page() {
  return (
    <section className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <PageHeader
        title="Terms of Service"
        desc="Last updated: February 2026"
        icon={<FaFileContract />}
        customName={["Terms of Service"]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-linear-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/25 text-xl text-white">
              <FaFileContract />
            </div>
            <div>
              <h2 className="text-lg font-bold text-amber-900 mb-2">
                Important Notice
              </h2>
              <p className="text-amber-800 leading-relaxed">
                By accessing and using FreshCart, you accept and agree to be
                bound by the terms and provisions of this agreement. Please read
                these terms carefully before using our services.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {termsOfServiceData.map((item, idx) => (
            <Section
              key={idx}
              articleNo={idx + 1}
              icon={item.icon}
              title={item.title}
              sectionItemList={item.items}
              text={item.text}
            />
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href={`/`}
              className="h-auto! inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-all duration-200 text-sm"
            >
              <FaArrowLeft />
              Back to Home
            </Link>
            <Link
              href={`/privacy`}
              className="h-auto! inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 font-medium shadow-lg shadow-green-500/25 transition-all duration-200"
            >
              View Privacy Policy 
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
