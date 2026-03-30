import * as z from 'zod'
export const loginSchema =  z.object({
 
  email:z.email('Email Isn`t In Format!')
  .nonempty('Email Is Required!'),
  password:z.string()
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ , 'Your Password Must Be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number')
  .nonempty('Password Is Required!'),
  terms: z.boolean()
})
