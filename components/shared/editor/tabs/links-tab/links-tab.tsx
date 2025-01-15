'use client';
import {Button} from "@/components/ui/button";
import AddLinkForm from "@/components/shared/editor/tabs/links-tab/add-link-form";
import React, {MouseEventHandler} from "react";
import PhoneMockup from "@/components/shared/editor/tabs/phone-mockup";
import Container from "@/components/shared/container";
import {ScrollArea} from "@/components/ui/scroll-area";

export type PlatformType = {
    index : number ,
    name : string ,
    link : string
}
export default function LinksTab() {

    // i keep it simple for now but i must go with zustand or redux

    const [platforms , setPlatforms] = React.useState<PlatformType[]>([{
        index : 1 ,
        name : 'github' ,
        link : 'github'
    }]);

    // const [platforms , setPlatforms] = React.useState<PlatformType[]>([]);


    const handleAddNewLinkCick =(e : React.MouseEventHandler<HTMLButtonElement>  ) =>{
        setPlatforms((prev) => [...prev , {index : prev.length + 1, name : 'name'  , link : 'link'}])
        console.log(platforms)
    }

    const handleRemovePlatform = (index : number) => {
        const newPlatforms = platforms.filter(platform => platform.index !== index);
        console.log( newPlatforms)
        setPlatforms( (pres) => [...newPlatforms]);
    }

    return (
        <Container className={'my-4 md:my-6 flex-1 flex md:gap-x-6 '}>

            <div className={'hidden invisible lg:flex lg:visible bg-white rounded-xl md:w-5/12 p-6 justify-center '}>
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

                <div className={'flex-1 '} >

                    {
                        platforms.length > 0 && (
                            <ScrollArea className={'relative h-full  mt-6 w-full'} type={'always'}>
                                <div className={'absolute top-0 bottom-0 '}>
                                    <div className={'flex flex-col gap-6 pb-6'}>
                                    {
                                        platforms.map((platform) => (
                                            <AddLinkForm
                                                key={platform.index}
                                                platform={platform}
                                                handleRemovePlatform={handleRemovePlatform}
                                            />
                                        ))
                                    }
                                    </div>
                                </div>

                            </ScrollArea>
                        )
                    }

                    {
                        platforms.length == 0 && (
                            <div
                                className={'bg-light-grey mt-6 flex flex-col items-center justify-center gap-y-6 flex-1 rounded-xl p-5 '}>

                                <div className={'w-32'}>
                                    <img src='/images/illustration-empty.svg' className={'mx-auto'}/>
                                </div>
                                <h1 className={'heading text-dark-grey'}>Let’s get you started</h1>
                                <p className={'body-m text-grey'}>Use the “Add new link” button to get started. Once you
                                    have more than one link, you can reorder and edit them. We’re here to help you share
                                    your profiles with everyone!</p>
                            </div>
                        )
                    }


                </div>

                <div className={'-mx-2 border-t border-t-border-color pt-6 mt-6 md:flex md:justify-end md:mx-0 '}>
                    <Button className={'w-full md:w-fit md:min-w-fit  '}>Save</Button>
                </div>
            </div>
        </Container>
    )
}