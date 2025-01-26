import z from 'zod'
import { IconType } from "react-icons";

export const LoginSchema = z.object({
    email: z.string().min(1, "Can't be empty").email('Invalid email'),
    password: z.string().min(1, "Can't be empty")
});

export type LoginFormDataType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
    email: z.string().min(1, "Can't be empty").email('Invalid email'),
    password: z.string().min(1, "Can't be empty").min(8, 'At least 8 characters'),
    confirmPassword: z.string().min(1, "Can't be empty").min(8, 'At least 8 characters'),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
})

export type RegisterFormDataType = z.infer<typeof RegisterSchema>;

export type LoginFormHeaderProps = {
    headerText: string,
    subHeaderText: string,
}

export const AddLinkSchema = z.object({
    platform: z.string().min(1, "Can't be empty"),
    link: z.string().min(1, "Can't be empty")
})

export type AddLinkFormDataType = z.infer<typeof AddLinkSchema>;

export type BasePlatformType = {
    id: string;
    tag: string;
    name: string;
    bgColor: string;
    textColor: string;
    arrowColor: string;
    withBorder: boolean;
    icon: IconType;
}


export type PlatformSelectType = {
    id: string;
    name: string;
    icon: IconType;
    value: string;
}

