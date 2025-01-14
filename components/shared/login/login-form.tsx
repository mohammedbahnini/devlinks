import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {MdEmail, MdLock} from "react-icons/md";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {LoginFormDataType, LoginSchema} from "@/lib/schemas";
import {zodResolver} from "@hookform/resolvers/zod";

export default function LoginForm() {
    const form = useForm<LoginFormDataType>({
        resolver : zodResolver(LoginSchema) ,
        defaultValues : {
            email: '' ,
            password: ''
        }
    });
    const onSubmit = (values:LoginFormDataType) => {
        console.log(values)
    }
    return (

        <div className='mt-10'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-6'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({field, fieldState}) => (
                            <FormItem>
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Text Field Empty"
                                        icon={<MdEmail/>}
                                        error={fieldState.error?.message}/>

                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='password'
                        render={({field, fieldState}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        placeholder="Enter your password"
                                        icon={<MdLock/>}
                                        error={fieldState.error?.message}/>

                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button variant={'default'} className='w-full'>Login</Button>

                    <div>
                        <p className='body-m text-center text-grey text-base'>Don't have an account ? <br
                            className='sm:hidden'/><Link href='/register' className='text-purple'>Create account</Link></p>
                    </div>
                </form>
            </Form>
        </div>
    )
}