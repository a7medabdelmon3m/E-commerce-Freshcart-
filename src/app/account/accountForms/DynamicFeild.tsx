'use client'
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
export type prop = {
  name: string;
  type?: string;
  control: Control;
  placeHolder: string;
  label: string;
  id?: string;
  isPassword?: boolean;
  required?: boolean;
};
export default function DynamicFeild({
  control,
  type = "text",
  name,
  label,
  placeHolder,
  id,
  isPassword = false,
  required = false
}: prop) {
    const [isShown, setisShown] = useState(false)
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Field
            className="flex flex-col gap-2"
            data-invalid={fieldState.invalid}
          >
            <FieldLabel
              className="text-[14px] leading-5 font-medium text-[#364153]"
              htmlFor={id || String(name)}
            >
              {label}
            </FieldLabel>
            <div className="relative">
              <Input
                className={`${isPassword ? 'py-3.25 pr-12 pl-4' :'py-3 px-4' } h-auto placeholder:text-[16px] rounded-xl border border-[#E5E7EB] text-[16px]! leading-6! font-medium! focus:border-main-color`}
                {...field}
                id={id || String(name)}
                aria-invalid={fieldState.invalid}
                placeholder={placeHolder}
                autoComplete="off"
                type={(isShown && isPassword) ? 'text' : type}
                required={required}
              />
              {isPassword && (
                <div onClick={() => setisShown(!isShown)} className="absolute top-4.5 right-4 text-[#99A1AF] cursor-pointer">
                    {isShown ? <FaEyeSlash /> : <FaEye /> }
                  
                  
                </div>
              )}
            </div>
            {fieldState.invalid && (
              <FieldError
                className="text-red-700"
                errors={[fieldState.error]}
              />
            )}
          </Field>
        )}
      />
    </div>
  );
}
