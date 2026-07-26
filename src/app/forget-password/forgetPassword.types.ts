
import * as z from "zod";
import { forgetPasswordSchema, resetPasswordSchema, verifyCodeSchema } from "./forgetPassword.schemes";

 export type forgetPasswordType = z.infer<typeof forgetPasswordSchema>;
 export type verifyCodeType = z.infer<typeof verifyCodeSchema>;
 export type resetPasswordType = z.infer<typeof resetPasswordSchema>;
