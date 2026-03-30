"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SessionProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <SessionProvider>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </SessionProvider>
    </div>
  );
}
