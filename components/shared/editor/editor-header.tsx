'use client';
import Container from "@/components/shared/container";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {LuLink} from "react-icons/lu";
import TabContent from "@/components/shared/editor/tab-content";
import {useState} from "react";
import {FaRegUserCircle} from "react-icons/fa";
import {TbEye} from "react-icons/tb";
import {Button} from "@/components/ui/button";
import LinksTab from "@/components/shared/editor/tabs/links-tab";

export default function EditorHeader() {
    const onValueChange = (e : string)=>{
        console.log(e);
        setCurrentTab(e)
    }
    const [currentTab , setCurrentTab] = useState<string>('account');
    return (
        <>
            <header>
                <Container className='bg-white py-4 px-6 flex justify-between items-center rounded-b-xl'>
                    <div>
                        <img src='/images/logo-devlinks-small.svg' alt='DevLinks' />
                    </div>
                    <div>
                        <Tabs defaultValue="account" className="" onValueChange={onValueChange}>
                            <TabsList className={'gap-0'}>
                                <TabsTrigger value="account" icon={LuLink}></TabsTrigger>
                                <TabsTrigger value="password" icon={FaRegUserCircle} ></TabsTrigger>
                            </TabsList>
                        </Tabs>

                    </div>
                    <div>
                        <Button variant={'outline'} className={'min-w-max'}><TbEye /></Button>
                    </div>
                </Container>
            </header>


            <section>
                <Container className={'bg-white rounded-xl mt-4 mx-4 p-6'}>

                    <TabContent currenTab={currentTab} value={'account'} content={<LinksTab />} />
                    <TabContent currenTab={currentTab} value={'password'} content={<LinksTab />} />
                </Container>
            </section>
        </>
    )
}