import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LoginFormDataType, LoginSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { authClient } from "@/lib/aut-client";
import { redirect } from "next/navigation";
import LoginButton from "./login-button";
import Message from "./message";

export default function LoginForm() {


    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [messageIsVisible, setMessageIsVisible] = useState(false);
    const [message, setMessage] = useState("");


    const onSubmit = (values: LoginFormDataType) => {
        authClient.signIn.email(
            { ...values },
            {
                onRequest: (ctx) => {
                    setIsPending(true);
                    setMessageIsVisible(false);
                },
                onError: (ctx) => {
                    console.log(ctx.error);
                    setIsPending(false);
                    setIsSuccess(false);
                    setMessageIsVisible(true);
                    setMessage(ctx.error.message);
                },
                onSuccess: () => {
                    setIsPending(false);
                    setIsSuccess(true);
                    setMessageIsVisible(true);
                    setMessage("You are logged in !");
                    redirect("/dashboard");
                },
            },
        );
    };


    const form = useForm<LoginFormDataType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: 'postmalon@example.com',
            password: '12345678'
        }
    });


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
                                        placeholder="Text Field Empty"
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
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        placeholder="Enter your password"
                                        icon={<MdLock />}
                                        error={fieldState.error?.message} />

                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Message
                        isSuccess={isSuccess}
                        isVisible={messageIsVisible}
                        message={message}
                    />

                    {/* <Button variant={'default'} className='w-full'>Login</Button> */}
                    <LoginButton isPending={isPending} />

                    <div>
                        <p className='body-m text-center text-grey text-base'>Don't have an account ? <br
                            className='sm:hidden' /><Link href='/register' className='text-purple'>Create account</Link></p>
                    </div>
                </form>
            </Form>
        </div>
    )
}