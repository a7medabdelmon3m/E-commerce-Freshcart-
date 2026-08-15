'use client'
import React, { useState } from 'react'
import ForgetPasswordImage from '../_component/forgetPasswordUI/forgetPasswordImage'
import ForgetPasswordForm from '../_component/forgetPasswordUI/ForgetPasswordForm'

export default function ForgetPasswordWrapper() {
  const [step, setStep] = useState<"forget-password" | "verify-code" | "reset-password">("forget-password")



  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
      <ForgetPasswordImage />
      <ForgetPasswordForm formType={step} onStepChange={(newStep) => setStep(newStep)} />
    </div>
  )
}
