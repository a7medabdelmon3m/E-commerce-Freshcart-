import React from "react";
import ForgetPasswordForm from "../_component/forgetPasswordUI/ForgetPasswordForm";
import ForgetPasswordImage from "../_component/forgetPasswordUI/forgetPasswordImage";

export default function page() {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <ForgetPasswordImage/>
          <ForgetPasswordForm formType="verify-code" />
        </div>
        
      </div>
    </section>
  );
}
