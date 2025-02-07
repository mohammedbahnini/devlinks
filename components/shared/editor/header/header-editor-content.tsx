import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Store } from "@/lib/store/store";
import { FaRegUserCircle } from "react-icons/fa";
import { LuLink } from "react-icons/lu";
import { TbEye } from "react-icons/tb";
import { MainStoreContext } from "../editor-page-provider";
import { useContext } from "react";
import { useStore } from "zustand";




export default function HeaderEditorContent() {

    const store = useContext(MainStoreContext);
    if (store) {
        const changeMode = useStore(store, s => s.changeMode);
        const defaultTab = useStore(store, s => s.currentTab);
        const changeTab = useStore(store, s => s.changeTab);
        return (
            <>
                <div>
                    <img src='/images/logo-devlinks-small.svg' alt='DevLinks' className="md:hidden md:invisible" />
                    <img src='/images/logo-devlinks-large.svg' alt='DevLinks' className="hidden invisible md:block md:visible max-w-[146px]" />
                </div>
                <div>
                    <Tabs defaultValue={defaultTab} className="" onValueChange={changeTab}>
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
                    <Button variant={'outline'} className={'min-w-max md:px-7'} onClick={() => changeMode('preview')} >
                        <TbEye className="md:hidden md:invisible" />
                        <span className="hidden invisible md:block md:visible">Preview</span>
                    </Button>
                </div>
            </>
        )

    }

    return null;





}