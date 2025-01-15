'use client';
import Container from "@/components/shared/container";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {LuLink} from "react-icons/lu";
import {FaRegUserCircle} from "react-icons/fa";
import {TbEye} from "react-icons/tb";
import {Button} from "@/components/ui/button";


type EditorHeaderProps = {
    handleTabChange : (e) ,
    defaultTab : string
}

export default function EditorHeader(props : EditorHeaderProps) {

    const { handleTabChange , defaultTab } = props;


    return (
            <header>
                <Container className='bg-white py-4 px-6 flex justify-between items-center rounded-b-xl'>
                    <div>
                        <img src='/images/logo-devlinks-small.svg' alt='DevLinks' />
                    </div>
                    <div>
                        <Tabs defaultValue={defaultTab} className="" onValueChange={handleTabChange}>
                            <TabsList className={'gap-0'}>
                                <TabsTrigger value="links" icon={LuLink}>
                                    <span className={'heading-s hidden invisible md:visible md:block'}>Links</span>
                                </TabsTrigger>
                                <TabsTrigger value="profile" icon={FaRegUserCircle}>
                                    <span className={'heading-s hidden invisible md:visible md:block'}>Profile Details</span>
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>

                    </div>
                    <div>
                        <Button variant={'outline'} className={'min-w-max'}><TbEye /></Button>
                    </div>
                </Container>
            </header>


    )
}