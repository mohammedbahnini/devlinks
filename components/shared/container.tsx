import React from "react";
import { cn } from '@/lib/utils';

type ContainerProps = {
    children? : React.ReactNode,
    className?: string
}

function Container(props : ContainerProps)  {
    const { children , className } = props;
    return (
        <div className={cn('mx-auto px-4 sm:px-6 md:px-0 max-w-[1392px]' , className )}>{children}</div>
    )
}

export default Container;