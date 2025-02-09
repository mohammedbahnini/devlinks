import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RegisterFormDataType, RegisterSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { authClient } from "@/lib/aut-client";
import Message from "../login/message";
import RegisterButton from "./register-button";
import { register } from "@/app/actions/register-action";

export default function RegisterForm() {

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isLoading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | undefined>('')
    const [messageIsVisible, setMessageIsVisible] = useState(false)


    const form = useForm<RegisterFormDataType>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: 'postmalon@example.com',
            password: '12345678',
            confirmPassword: '12345678'
        }
    });


    const onSubmit = async (values: RegisterFormDataType) => {

        // the same thing as the login page ( use server actions instead )dddddd

        setLoading(true);
        setIsSuccess(false);
        setMessageIsVisible(false);
        setMessage('');

        //await register(values);

        authClient.signUp.email({
            email: values.email,
            password: values.password
        }, {
            onSuccess(context) {

                setLoading(false);
                setIsSuccess(true);
                setMessageIsVisible(true);
                setMessage('Account created !');

            },
            onError(context) {
                console.log(context.error);

                setLoading(false);
                setIsSuccess(false);
                setMessageIsVisible(true);
                setMessage(context.error.message || 'An error occured whilre creating your account , please try later !');


            },
        });


    }


    return (
        <div className='mt-10'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-6'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="e.g.alex@email.com"
                                        icon={<MdEmail />}
                                        error={fieldState.error?.message} />

                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Create password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        placeholder="At least 8 charachters"
                                        icon={<MdLock />}
                                        error={fieldState.error?.message} />

                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='confirmPassword'
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Confirm password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        placeholder="At least 8 charachters"
                                        icon={<MdLock />}
                                        error={fieldState.error?.message} />

                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <p className='body-s text-grey'>Password must contain at least 8 characherts</p>

                    <Message isSuccess={isSuccess} message={message} isVisible={messageIsVisible} />

                    <RegisterButton isLoading={isLoading} />



                    <div>
                        <p className='body-m text-center text-grey text-base'>Already have an account ? <br
                            className='sm:hidden' /><Link href='/login' className='text-purple'>Login</Link>
                        </p>
                    </div>
                </form>
            </Form>
        </div>
    )
}