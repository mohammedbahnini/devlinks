import React from 'react'
import { LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Props {
    isPending: boolean
}

function LoginButton(props: Props) {
    const { isPending } = props

    return (
        <Button type='submit' className='w-full' disabled={isPending} variant={'default'}>
            {isPending && (<LoaderCircle className='animate-spin' />)}
            {!isPending && 'Log in'}
        </Button>
    )
}

export default LoginButton
