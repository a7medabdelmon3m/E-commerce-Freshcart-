import * as z from 'zod'
export const registerSchema =  z.object({
  name:z.string('Name Must Be Text!')
  .nonempty('Name Is Required!')
  .min(3, 'Name Must Be At least 3 Characters!')
  .max(25, 'Name Must Be 25 characters Maximum!'),
  email:z.email('Email Isn`t In Format!')
  .nonempty('Email Is Required!'),
  password:z.string()
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ , 'Your Password Must Be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number')
  .nonempty('Password Is Required!'),
 rePassword:z.string()
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ , 'Your Password Must Be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number')
  .nonempty('Password Is Required!'),
  phone:z.string()
  .nonempty('Phone Is Required!')
  .regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/ ,'Phone Must Be Egyptian Number!'),
  terms: z.boolean().refine(val => val === true, {
    message: "*You must accept the terms and conditions"
  }),
}).refine((values) => values.password === values.rePassword, {error:'Passwords Are Inmatch!' ,path:['rePassword']})
