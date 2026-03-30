import { Phone } from "lucide-react";
import { z } from "zod";
export const checkoutSchema = z.object({
    details:z.string().nonempty('Details Of Address Is Required!')
    .min(10,'Address Must Be 10 Characters At Least !')
    .max(100,'Address Is Too Long !'),
    phone:z.string()
    .nonempty('Phone Is Required!')
    .regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/ ,'Phone Must Be Egyptian Number!'),
    city:z.string()
    .nonempty('City Is Required!')
    .min(3,'City`s Name Is Too Short!')
    .max(25 ,'City`s Name Is Too Long!'),
    postalCode: z
    .string()
    .length(5, "The Postal Code In Egypt Consist From 5 Characters!")
    .regex(/^[0-9]+$/, "Just Numbers"),
})
export type CheckoutValues = z.infer<typeof checkoutSchema>;
// {
//   "shippingAddress": {
//     "details": "Test address",
//     "phone": "01000000000",
//     "city": "Cairo",
//     "postalCode": "12345"
//   }
// }