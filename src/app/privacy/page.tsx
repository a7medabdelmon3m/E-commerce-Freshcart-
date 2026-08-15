import React, { ReactNode } from "react";
import PageHeader from "../_component/PageHeader";
import {
  FaShieldHalved,
  FaDatabase,
  FaUserShield,
  FaLock,
  FaShareNodes,
  FaUserCheck,
  FaCookieBite,
  FaClock,
  FaEnvelope,
} from "react-icons/fa6";
import Section from "./Section";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export interface PolicySection {
  icon: IconType;
  title: string;
  items?: {
    title: string;
    desc: string;
  }[];
  text?: ReactNode;
}

export const privacyPolicyData: PolicySection[] = [
  {
    icon: FaDatabase,
    title: "Information We Collect",
    items: [
      {
        title: "Personal Data:",
        desc: "Name, email address, phone number, and shipping address.",
      },
      {
        title: "Payment Data:",
        desc: "Credit card information processed securely through our payment providers.",
      },
      {
        title: "Technical Data:",
        desc: "IP address, browser type, device information, and access times.",
      },
      {
        title: "Usage Data:",
        desc: "Pages viewed, products browsed, and actions taken within our platform.",
      },
    ],
  },
  {
    icon: FaUserShield,
    title: "How We Use Your Information",
    items: [
      {
        title: "",
        desc: "To process and fulfill your orders.",
      },
      {
        title: "",
        desc: "To send order confirmations and shipping updates.",
      },
      {
        title: "",
        desc: "To provide customer support and respond to inquiries.",
      },
      {
        title: "",
        desc: "To improve our products, services, and user experience.",
      },
      {
        title: "",
        desc: "To send promotional communications (with your consent).",
      },
    ],
  },
  {
    icon: FaLock,
    title: "Data Protection",
    items: [
      {
        title: "",
        desc: "We implement industry-standard encryption (SSL/TLS) for all data transfers.",
      },
      {
        title: "",
        desc: "Payment information is processed by PCI-compliant payment providers.",
      },
      {
        title: "",
        desc: "We conduct regular security audits and vulnerability assessments.",
      },
      {
        title: "",
        desc: "Access to personal data is restricted to authorized personnel only.",
      },
    ],
  },
  {
    icon: FaShareNodes,
    title: "Information Sharing",
    items: [
      {
        title: "",
        desc: "We do not sell, trade, or rent your personal information to third parties.",
      },
      {
        title: "",
        desc: "We may share data with trusted service providers who assist in our operations.",
      },
      {
        title: "",
        desc: "We may disclose information when required by law or to protect our rights.",
      },
    ],
  },
  {
    icon: FaUserCheck,
    title: "Your Rights",
    items: [
      {
        title: "Access:",
        desc: "Request a copy of your personal data.",
      },
      {
        title: "Rectification:",
        desc: "Request correction of inaccurate data.",
      },
      {
        title: "Erasure:",
        desc: "Request deletion of your personal data.",
      },
      {
        title: "Portability:",
        desc: "Request your data in a portable format.",
      },
      {
        title: "Opt-out:",
        desc: "Unsubscribe from marketing communications at any time.",
      },
    ],
  },
  {
    icon: FaCookieBite,
    title: "Cookies",
    items: [
      {
        title: "",
        desc: "We use cookies to enhance your browsing experience and remember preferences.",
      },
      {
        title: "",
        desc: "You can control cookie settings through your browser preferences.",
      },
      {
        title: "",
        desc: "Disabling cookies may affect the functionality of certain features.",
      },
    ],
  },
  {
    icon: FaClock,
    title: "Data Retention",

    text: (
      <span>
        We retain your personal information only for as long as necessary to
        fulfill the purposes outlined in this policy, or as required by law.
        Account data is deleted within 30 days of account closure upon request.
      </span>
    ),
  },
  {
    icon: FaEnvelope,
    title: "Contact Us",

    text: (
      <span>
        For questions about this Privacy Policy or to exercise your rights,
        contact our Data Protection Officer at{" "}
        <Link
          className="text-green-600 hover:text-green-700 font-semibold hover:underline"
          href="mailto:privacy@freshcart.com"
        >
          privacy@freshcart.com
        </Link>
      </span>
    ),
  },
];

export default function page() {
  return (
    <section className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <PageHeader
        title="Privacy Policy"
        desc="Last updated: February 2026"
        icon={<FaShieldHalved />}
        customName={["Privacy Policy"]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-linear-to-r from-green-50 to-green-100/50 border border-green-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/25 text-xl text-white">
              <FaShieldHalved />
            </div>
            <div>
              <h2 className="text-lg font-bold text-green-900 mb-2">
                Your Privacy Matters
              </h2>
              <p className="text-green-800 leading-relaxed">
                This Privacy Policy describes how FreshCart collects, uses, and
                protects your personal information when you use our services. We
                are committed to ensuring that your privacy is protected.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {privacyPolicyData.map((item, idx) => (
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
            <Link href={`/terms`} className="h-auto! inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 font-medium shadow-lg shadow-green-500/25 transition-all duration-200">
            View Terms of Service
            <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
