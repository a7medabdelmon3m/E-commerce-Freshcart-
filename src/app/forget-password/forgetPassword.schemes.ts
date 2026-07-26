import * as z from "zod";

export const forgetPasswordSchema = z.object({
  email: z.email("Email Isn`t In Format!").nonempty("Email Is Required!"),
});

export const verifyCodeSchema = z.object({
  code: z
    .string()
    .nonempty("Code Is Required!")
    .regex(/^[0-9]{6}/, "Code Must Be 6 Digits")
    
});

export const resetPasswordSchema = z.object({
  new_password: z
    .string()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Your Password Must Be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
    )
    .nonempty("New Password Is Required!"),
    confirm_password:z.string()
}).refine((value) => value.new_password === value.confirm_password ,{error:'Passwords Are Inmatch' ,path:['confirm_password']} );
