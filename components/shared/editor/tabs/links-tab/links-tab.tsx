'use client';
import {Button} from "@/components/ui/button";
import AddLinkForm from "@/components/shared/editor/tabs/links-tab/add-link-form";
import React from "react";

type PlatformType = {
    name : string ,
    link : string
}
export default function LinksTab() {

    // i keep it simple for now but i must go with zustand or redux

    const [platforms , setPlatforms] = React.useState<PlatformType[]>([]);

    return (
        <>

            <div className={'flex flex-col gap-2'}>

                <h1 className={'heading text-dark-grey '}>Customize your links</h1>
                <p className={'body-m text-grey '}>Add/edit/remove links below and then share all your profiles with the
                    world!</p>
            </div>

            <div className={'mt-10 flex-1 flex'}>
                {
                    platforms.length > 0 && (
                        <div>
                            <Button variant={'outline'} className={'w-full'}>+ Add new link</Button>

                            <div className={'mt-6 flex flex-col gap-y-6'}>
                                <AddLinkForm/>
                            </div>

                        </div>
                    )
                }

                {
                    platforms.length == 0 && (
                        <div className={'bg-light-grey m-5 flex flex-col items-center justify-center gap-y-6 flex-1 '}>
                            <div className={'w-32'}>
                                <img src='/images/illustration-empty.svg' className={'mx-auto'}/>
                            </div>
                            <h1 className={'heading text-dark-grey'}>Let’s get you started</h1>
                            <p className={'body-m text-grey'}>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                        </div>
                    )
                }


            </div>
            <div className={'-mx-2 border-t border-t-border-color pt-6 mt-6'}>
            <Button className={'w-full'}>Save</Button>
            </div>
        </>
    )
}