import z from 'zod'

export const LoginSchema = z.object({
    email : z.string().min(1,"Can't be empty").email('Invalid email') ,
    password : z.string().min(1,"Can't be empty")
});

export type LoginFormDataType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
    email : z.string().min(1,"Can't be empty").email('Invalid email') ,
    password : z.string().min(1,"Can't be empty").min(8,'At least 8 characters'),
    confirmPassword : z.string().min(1,"Can't be empty").min(8,'At least 8 characters'),
}).refine( ({password , confirmPassword}) => password === confirmPassword ,{
    message : 'Passwords do not match',
    path : ['confirmPassword']
})

export type RegisterFormDataType = z.infer<typeof RegisterSchema>;

export type LoginFormHeaderProps  = {
    headerText : string ,
    subHeaderText : string ,
}

export const AddLinkSchema = z.object({
    link : z.string().min(1,"Can't be empty")
})

export type AddLinkFormDataType = z.infer<typeof AddLinkSchema>;