import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {MdEmail, MdLock} from "react-icons/md";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useForm} from "react-hook-form";
import { RegisterFormDataType, RegisterSchema} from "@/lib/schemas";
import {zodResolver} from "@hookform/resolvers/zod";

export default function RegisterForm(){


    const form = useForm<RegisterFormDataType>({
        resolver : zodResolver(RegisterSchema) ,
        defaultValues : {
            email: '' ,
            password :'' ,
            confirmPassword: ''
        }
    });
    const onSubmit = (values:RegisterFormDataType) => {
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
                                        placeholder="e.g.alex@email.com"
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
                                <FormLabel>Create password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        placeholder="At least 8 charachters"
                                        icon={<MdLock/>}
                                        error={fieldState.error?.message}/>

                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='confirmPassword'
                        render={({field, fieldState}) => (
                            <FormItem>
                                <FormLabel>Confirm password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        placeholder="At least 8 charachters"
                                        icon={<MdLock/>}
                                        error={fieldState.error?.message}/>

                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <p className='body-s text-grey'>Password must contain at least 8 characherts</p>

                    <Button variant={'default'} className='w-full'>Create new account</Button>

                    <div>
                        <p className='body-m text-center text-grey text-base'>Already have an account ? <br
                            className='sm:hidden'/><Link href='/login' className='text-purple'>Login</Link>
                        </p>
                    </div>
                </form>
            </Form>
        </div>
    )
}