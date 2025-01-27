'use client';
import Container from "@/components/shared/container";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LuLink } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { TbEye } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import HeaderEditorContent from "./header-editor-content";
import HeaderPreviewContent from "./header-preview-content";


type EditorHeaderProps = {
    handleTabChange: (e);
    defaultTab: string;
    mode: string;
}

export default function EditorHeader(props: EditorHeaderProps) {

    const { handleTabChange, defaultTab, mode } = props;


    return (
        <header className="md:p-6 md:pb-0 ">
            <Container className='bg-white py-4 px-6 flex justify-between items-center rounded-b-xl md:rounded-xl gap-x-4'>
                {/* <div>
                    <img src='/images/logo-devlinks-small.svg' alt='DevLinks' className="md:hidden md:invisible" />
                    <img src='/images/logo-devlinks-large.svg' alt='DevLinks' className="hidden invisible md:block md:visible max-w-[146px]" />
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
                    <Button variant={'outline'} className={'min-w-max md:px-7'} >
                        <TbEye className="md:hidden md:invisible" />
                        <span className="hidden invisible md:block md:visible">Preview</span>
                    </Button>
                </div> */}
                {mode === 'editor' && <HeaderEditorContent defaultTab={defaultTab} handleTabChange={handleTabChange} />}
                {mode === 'preview' && <HeaderPreviewContent />}
            </Container>

        </header>


    )
}