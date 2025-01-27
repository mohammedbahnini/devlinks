import AddLinkForm from "@/components/shared/editor/tabs/links-tab/add-link-form";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { MdArrowForward } from "react-icons/md";
import { Store } from "@/lib/store/store";



export default function PhoneMockup(props: Props) {

    const mockupPlatforms = Store(state => state.mockupPlatforms);
    const currentTab = Store(state => state.currentTab);
    const count = 5 - (mockupPlatforms.length ? mockupPlatforms.length : 0);


    return (
        <div className='relative'>
            <div className='absolute w-full h-full px-7 '>
                <div className='absolute top-[59px] bottom-[48px] left-[34px] right-[34px] bg-white flex flex-col items-center  '>
                    <div className='rounded-full bg-mockup-fill w-24 aspect-square mb-6 '></div>
                    <div className='bg-mockup-fill h-4 w-full max-w-[160px] rounded-full mb-[13px]'></div>
                    <div className='bg-mockup-fill h-2 w-full rounded-full max-w-20'></div>

                    <div className='flex-1 h-52 w-full mt-14'>
                        <ScrollArea className={'relative h-full w-full '}>
                            <div className={'absolute inset-0'}>
                                <div className={'flex flex-col gap-5 pb-0 '}>
                                    {
                                        mockupPlatforms?.map((platform) => (
                                            <div className={cn('rounded-xl h-11 flex items-center  w-full ', platform.bgColor, platform.withBorder && 'border')} key={platform.tag}>
                                                <div className='flex flex-1  px-4 items-center gap-x-2'>
                                                    <platform.icon className={platform.textColor} />
                                                    <p className={cn('flex-1 ', platform.textColor)} >{platform.name}</p>
                                                    <MdArrowForward className={platform.arrowColor} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {
                                        count > 0 && currentTab !== 'profile' && Array.from(Array(count).keys()).map((item) => (
                                            <div className='bg-mockup-fill rounded-xl h-11 w-full ' key={item}></div>
                                        ))
                                    }
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                </div>

            </div>
            <img src='/images/illustration-phone-mockup.svg' />
        </div>
    )
}