import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email' }),
  phone: z.string().regex(
    /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, // Regex for validating international and local phone numbers
    {
      message: 'Invalid phone number.',
    }
  ),
  website: z
    .string()
    .optional()
    .refine((val) => !val || /^https?:\/\//.test(val), {
      message: 'Please enter a valid URL.(starting with http:// or https://)',
    }),
  company: z.string().optional(),
  subject: z.string().min(3, { message: 'Subject is required' }),
  message: z.string().min(10, { message: 'Message is required' }),
})

export { contactFormSchema }
