'use client';
import Container from "@/components/shared/container";
import {useForm} from "react-hook-form";
import {LoginFormDataType, LoginSchema} from "@/lib/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {MdEmail, MdLock} from "react-icons/md";
import {Button} from "@/components/ui/button";
import Link from "next/link";


const LoginPage =  ()=>{
    const form = useForm<LoginFormDataType>({
        resolver : zodResolver(LoginSchema) ,
        defaultValues : {
            email: 'jhondoe@example.com' ,
            password: '123456'
        }
    });
    const onSubmit = (values:LoginFormDataType) => {
        console.log(values)
    }
    return (
        <header>
            <Container className='mt-8'>
                <a href="/">
                    <img src='/images/logo-devlinks-large.svg' />
                </a>
            </Container>

            <section>
                <Container className='mt-16 px-8'>
                    <div className='flex flex-col gap-y-2'>
                        <h1 className='heading-m text-dark-grey'>Login</h1>
                        <p className='text-grey body-m'>Add your details below to get back into the app</p>
                    </div>

                    <div className='mt-10'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-6'>
                                <FormField
                                control={form.control}
                                name='email'
                                render={({ field , fieldState }) => (
                                    <FormItem>
                                        <FormLabel>Email address</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Text Field Empty"
                                                icon={<MdEmail  />}
                                                error={fieldState.error?.message} />

                                        </FormControl>
                                    </FormItem>
                                )}
                                />

                                <FormField
                                    control={form.control}
                                    name='password'
                                    render={({ field , fieldState }) => (
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

                                <Button variant={'default'} className='w-full' >Login</Button>

                                <div>
                                    <p className='body-m text-center text-grey text-base'>Don't have an account ?<br/><Link href='/' className='text-purple'>Create account</Link> </p>
                                </div>
                            </form>
                        </Form>
                    </div>

                </Container>
            </section>
        </header>
    )
}

export default LoginPage;