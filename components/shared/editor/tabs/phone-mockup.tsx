import AddLinkForm from "@/components/shared/editor/tabs/links-tab/add-link-form";
import React from "react";
import {ScrollArea} from "@/components/ui/scroll-area";
import {BasePlatformType, PlatformPhoneMockupType} from "@/lib/schemas";
import {cn} from "@/lib/utils";
import {MdArrowForward} from "react-icons/md";


type Props = {
    plaforms? : BasePlatformType[]
}

export default function PhoneMockup(props : Props){
    const { plaforms } = props;
    const count = 5 - (plaforms?.length ? plaforms?.length : 0);
    console.log(count);
    return (
        <div className='relative bg-youtube'>
            <div className='absolute w-full h-full bg-green-700/10 px-7 '>
                <div className='absolute top-[62px] bottom-[56px] left-[36px] right-[36px] bg-purple/10 flex flex-col items-center  '>
                    <div className='rounded-full bg-yellow-500 w-24 aspect-square mb-6 '></div>
                    <div className='bg-purple h-4 w-full max-w-[160px] rounded-full mb-[13px]'></div>
                    <div className='bg-purple h-2 w-full rounded-full max-w-20'></div>

                    <div className='flex-1 h-52 w-full mt-14'>
                        <ScrollArea className={'relative h-full w-full '}>
                            <div className={'absolute inset-0'}>
                                <div className={'flex flex-col gap-5 pb-0 '}>
                                    {
                                        plaforms?.map( (platform)=> (
                                            <div className={cn('rounded-xl h-11 w-full ' , platform.bgColor )} key={platform.tag}>
                                                <div className='flex py-3 px-4 items-center gap-x-2'>
                                                    <platform.icon className={platform.textColor} />
                                                    <p className={cn('flex-1 ' , platform.textColor)} >{platform.name}</p>
                                                    <MdArrowForward className={platform.arrowColor} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {
                                        count >0 && Array.from(Array(count).keys()).map((item) => (
                                            <div className='bg-purple rounded-xl h-11 w-full ' key={item}></div>
                                        ))
                                    }
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                </div>

            </div>
            <img src='/images/illustration-phone-mockup.svg'/>
        </div>
    )
}