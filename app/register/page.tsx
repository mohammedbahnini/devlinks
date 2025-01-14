'use client';
import LoginHeader from "@/components/shared/login/login-header";
import LoginFormHeader from "@/components/shared/login/login-form-header";
import RegisterForm from "@/components/shared/register/register-form";

export default function RegisterPage(){
    return (
        <div className='flex flex-col gap-y-16 pt-8 sm:items-center sm:justify-center min-h-screen  '>

            <LoginHeader/>

            <section>

                <div className='px-8 sm:w-[476px] sm:bg-white sm:rounded-lg sm:p-10  '>

                    <LoginFormHeader
                        headerText={'Create account'}
                        subHeaderText={'Let’s get you started sharing your links!'}
                    />
                    <RegisterForm />

                </div>
            </section>
        </div>
    )
}