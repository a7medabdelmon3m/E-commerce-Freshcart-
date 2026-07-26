import React, { ReactNode } from "react";
import PageHeader from "../_component/PageHeader";
import {
  FaEnvelope,
  FaFacebookF,
  FaHeadset,
  FaInstagram,
  FaLinkedinIn,
  FaLock,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { FaCircleQuestion, FaLocationDot } from "react-icons/fa6";
import ContactForm from "./contactForm";

const contactList = [
  {
    icon: <FaPhone />,
    title: "Phone",
    text: "Mon-Fri from 8am to 6pm",
    link: {
      path: "tel:+18001234567",
      text: "+1 (800) 123-4567",
    },
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "We'll respond within 24 hours",
    link: {
      path: "mailto:support@freshcart.com",
      text: "support@freshcart.com",
    },
  },
  {
    icon: <FaLocationDot />,
    title: "Office",
    text: (
      <p>
        123 Commerce
        <br />
        Street New York, NY 10001
        <br />
        United States
      </p>
    ),
  },
  {
    icon: <FaLock />,
    title: "Business Hours",
    text: (
      <p>
        Monday - Friday: 8am - 6pm
        <br />
        Saturday: 9am - 4pm
        <br />
        Sunday: Closed
      </p>
    ),
  },
];
const socialMediaItems = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
];

export default function Page() {
  return (
    <section className="min-h-screen">
      <PageHeader
        desc="We'd love to hear from you. Get in touch with our team."
        title="Contact Us"
        customName={["Contact Us"]}
        icon={<FaHeadset />}
      />
      <div className="container px-4 py-12 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactList.map((item) => (
              <ContactItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                text={item.text}
                link={item.link}
              />
            ))}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex items-center gap-3">
                {socialMediaItems.map((item) => (
                  <Link
                    key={String(item.icon)}
                    href={item.link}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 text-lg">
                  <FaHeadset />
                </div>
                <div className="">
                  <h2 className="text-xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Fill out the form and we&apos;ll get back to you
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
            <div className="mt-6 bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-green-600 text-xl">
                  <FaCircleQuestion />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Looking for quick answers?
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Check out our Help Center for frequently asked questions
                    about orders, shipping, returns, and more.
                  </p>
                  <Link
                    href={`/help`}
                    className="text-green-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Visit Help Center →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type prop = {
  icon: ReactNode;
  title: string;
  text: ReactNode;
  link?: {
    path: string;
    text: string;
  };
};
function ContactItem({ icon, text, title, link }: prop) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0 text-green-600 text-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-500 text-sm mb-2">{text}</p>
          {link && (
            <Link
              className="text-green-600 font-medium hover:underline"
              href={link?.path as string}
            >
              {link?.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
