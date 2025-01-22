'use client';
import { Button } from "@/components/ui/button";
import AddLinkForm from "@/components/shared/editor/tabs/links-tab/add-link-form";
import React, { MouseEventHandler, useEffect, useRef } from "react";
import PhoneMockup from "@/components/shared/editor/tabs/phone-mockup";
import Container from "@/components/shared/container";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {BasePlatformType, PlatformType} from "@/lib/schemas";
import {InitialPlatforms} from '@/lib/platforms'
import {GetPlatformByTag} from "@/lib/functions";

type PlatformsToSaveType = {
    index : number ;
    name : string ;
    value : string ;
}

export default function LinksTab() {

    // i keep it simple for now but i must go with zustand or redux

    const [platformsValues, setPlatformsValues] = React.useState<string[] | null >(null);


    const  [mockupPlatforms, setMockupPlatforms] = React.useState<BasePlatformType[]>([]);

    const platformsView = useRef<HTMLDivElement>(null);


    const handleAddNewLinkCick = async (e: React.MouseEventHandler<HTMLButtonElement>) => {

        await setPlatformsValues((prev) => prev ? [...prev,''] : ['']);

        platformsView.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }






    const handleRemovePlatform = (value :string ,index: number) => {
        console.log(value,index);
        const newPlatforms = platformsValues.filter((platformValue, i) => i !== index );
        //console.log(newPlatforms)
        setPlatformsValues(() => newPlatforms.length > 0 ?  [...newPlatforms] : null );


        const newMockupPlatforms = mockupPlatforms.filter( (item , i) => item.tag !== value && i !== index);
        setMockupPlatforms( () => [...newMockupPlatforms]);
        
    }

    const handleChangePlatform = (value : string , index : number) => {
        console.log( value , index );

        const platfotmToAdd = GetPlatformByTag(value);

        // check if the base platforms contains the selecvted value
        if( platfotmToAdd) {

            // check if the selected index exists to update the mockup platforms
            if( mockupPlatforms[index] )
            {
                setMockupPlatforms( (prevState) => {
                    return prevState.map( (item , prevStateIndex) => {
                        if( prevStateIndex === index )
                        {
                            return {
                                ...platfotmToAdd
                            }
                        }
                        else
                        {
                            return  item;
                        }
                    })
                })
            }
            else
                setMockupPlatforms( (prevState) => [...prevState , platfotmToAdd] );
        }


    }




    return (
        <Container className={'my-4 md:my-6 flex-1 flex md:gap-x-6'}>

            <div className={'hidden invisible lg:flex lg:visible bg-white rounded-xl md:w-5/12 p-6 items-center justify-center '}>
                <PhoneMockup plaforms={mockupPlatforms} />
            </div>


            <div className={'h-full flex-1 flex flex-col bg-white rounded-xl p-6 md:p-10'}>

                <div className={'flex flex-col gap-2'}>
                    <h1 className={'heading text-dark-grey '}>Customize your links</h1>
                    <p className={'body-m text-grey '}>Add/edit/remove links below and then share all your profiles with
                        the
                        world!</p>
                </div>

                <Button variant={'outline'} className={'w-full mt-10 '} onClick={handleAddNewLinkCick}>+ Add new
                    link</Button>

                <div className={cn('flex-1 bg-white mt-6 mb-6  md:mb-10', platformsValues?.length && 'md:mb-0')} >

                    {
                        platformsValues?.length && platformsValues.length > 0 && (
                            <ScrollArea className={'relative h-full  mt-0 w-full'} type={'hover'}>
                                <div className={'absolute inset-0'}>
                                    <div className={'flex flex-col gap-6 pb-0 '} ref={platformsView}>
                                        {
                                            platformsValues.map((platform, index) => (
                                                <AddLinkForm
                                                    key={index}
                                                    platformValue={platform}
                                                    handleRemovePlatform={handleRemovePlatform}
                                                    handleChangePlatform={handleChangePlatform}
                                                    index={index}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>

                            </ScrollArea>
                        )
                    }

                    {
                        !platformsValues?.length && (
                            <div
                                className={'bg-light-grey mt-0 h-full mb-6 flex flex-col items-center justify-center gap-y-6  rounded-xl p-5 '}>

                                <div className={'w-32 md:w-64'}>
                                    <img src='/images/illustration-empty.svg' className={'mx-auto'}/>
                                </div>
                                <h1 className={'heading text-dark-grey'}>Let’s get you started</h1>
                                <p className={'body-m text-grey text-center'}>Use the “Add new link” button to get started.
                                    Once you
                                    have more than one link, you can reorder and edit them. We’re here to help you share
                                    your profiles with everyone!</p>
                            </div>
                        )
                    }


                </div>

                <div className={'-mx-2 border-t border-t-border-color pt-0 mt-0 md:flex md:justify-end md:mx-0 '}>
                    <Button className={cn('w-full md:w-fit md:min-w-fit mt-6  ')} disabled={platformsValues?.length} >Save</Button>
                </div>
            </div>
        </Container>
    )
}