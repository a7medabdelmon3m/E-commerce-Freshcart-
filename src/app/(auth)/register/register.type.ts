import * as z from 'zod'
import { registerSchema } from './register.schema'

export type registerType = z.infer<typeof registerSchema>
