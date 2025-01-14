import z from 'zod'

export const LoginSchema = z.object({
    email : z.string().min(1,"Can't be empty").email('Invalid email') ,
    password : z.string().min(1,"Can't be empty")
});

export type LoginFormDataType = z.infer<typeof LoginSchema>;
