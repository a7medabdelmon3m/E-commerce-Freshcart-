import * as z from 'zod'
import { loginSchema } from './login.schema'

export type loginType = z.infer<typeof loginSchema>
