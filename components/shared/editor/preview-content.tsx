import Container from '@/components/shared/container'
import { ScrollArea } from '@/components/ui/scroll-area';
import { Store } from '@/lib/store/store';
import { cn } from '@/lib/utils';
import { MdArrowForward } from 'react-icons/md';
export default function PreviewContent() {
    const mockupPlatforms = Store(state => state.mockupPlatforms);
    const count = 5 - (mockupPlatforms.length ? mockupPlatforms.length : 0);

    return (
        <section className='flex flex-col justify-center items-center flex-1 pb-0'>

            <div className='absolute bg-purple w-full h-[357px] top-0 -z-10 hidden invisible md:visible md:block rounded-b-[2rem] '></div>



            <div className='mt-16 mb-0 flex flex-col flex-1 h-full items-center md:bg-white md:py-12 md:px-14 md:rounded-3xl md:mb-0 md:shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)]  '>

                <div className='border-4 border-purple w-28 aspect-square rounded-full overflow-hidden'>
                    <img src='avatar.PNG' className='w-full h-full object-cover' alt='avatar' />
                </div>

                <h1 className='heading-m mt-6 text-dark-grey '>Ben Wright</h1>
                <h2 className='body-m text-grey mt-2'>ben@example.com</h2>



                <div className='h-full flex-1  mt-14 flex flex-col relative w-[237px]'>
                    <div className='absolute inset-0 '>
                        <ScrollArea className={'relative h-full w-full '} >
                            <div className='absolute  inset-0 '>
                                <div className={'flex flex-col  gap-5  '}>
                                    {
                                        mockupPlatforms?.map((platform) => (
                                            <div className={cn('rounded-xl h-11 flex items-center w-full', platform.bgColor, platform.withBorder && 'border')} key={platform.tag}>
                                                <div className='flex flex-1  px-4 items-center gap-x-2'>
                                                    <platform.icon className={platform.textColor} />
                                                    <p className={cn('flex-1 ', platform.textColor)} >{platform.name}</p>
                                                    <MdArrowForward className={platform.arrowColor} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </ScrollArea>
                    </div>


                </div>

            </div>
        </section >
    )
}