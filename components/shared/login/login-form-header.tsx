import {LoginFormHeaderProps} from "@/lib/schemas";

export default function LoginFormHeader(props: LoginFormHeaderProps) {
    const {headerText , subHeaderText } =props;
    return (

        <div className='flex flex-col gap-y-2'>
            <h1 className='heading-m text-dark-grey'>{headerText}</h1>
            <p className='text-grey body-m'>{subHeaderText}</p>
        </div>
    )
}