'use client';
import { Button } from "@/components/ui/button";
import AddLinkForm from "@/components/shared/editor/tabs/links-tab/add-link-form";
import React, { MouseEventHandler, useContext, useEffect, useRef } from "react";
import PhoneMockup from "@/components/shared/editor/tabs/phone-mockup";
import Container from "@/components/shared/container";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Store } from "@/lib/store/store";
import { MainStoreContext } from "../../editor-page-provider";
import { useStore } from "zustand";

type PlatformsToSaveType = {
    index: number;
    name: string;
    value: string;
}

export default function LinksTab() {

    const { toast } = useToast();
    const platformsView = useRef<HTMLDivElement>(null);

    const store = useContext(MainStoreContext);

    if (store) {

        const {
            platformsValues,
            mockupPlatforms,
            addEmptyPlatformValue,
            removePlatform,
            updatePlatform
        } = useStore(store, s => s);


        const handleAddNewLinkCick = async () => {


            const el = platformsValues?.includes('')

            if (el) {

                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Please fill all the platforms !",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }
            else {
                await addEmptyPlatformValue();

                platformsView.current?.scrollIntoView({ behavior: "smooth", block: "end" });
            }


        }






        const handleRemovePlatform = async (value: string, index: number) => {

            removePlatform(value, index);
        }

        const handleChangePlatform = async (value: string, index: number) => {

            updatePlatform(value, index);

        }



        return (
            <Container className={'my-4 md:my-6 flex-1 flex md:gap-x-6'}>

                <div className={'hidden invisible lg:flex lg:visible bg-white rounded-xl md:w-5/12 p-6 items-center justify-center '}>
                    <PhoneMockup />
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
                            platformsValues && platformsValues.length > 0 && (
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
                                        <img src='/images/illustration-empty.svg' className={'mx-auto'} alt='' />
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
                        <Button className={cn('w-full md:w-fit md:min-w-fit mt-6  ')} disabled={platformsValues.length === 0} >Save</Button>
                    </div>
                </div>
            </Container>
        )
    }


    return null

}