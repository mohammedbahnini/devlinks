'use client';
import EditorHeader from "@/components/shared/editor/editor-header";
import EditorTabs from "@/components/shared/editor/editor-tabs";
import {useState} from "react";

export default function EditorPage() {
    const defaultTab = 'links';
    const [currentTab , setCurrentTab] = useState<string>(defaultTab);

    const handleTabChange = (e : string)=>{
        console.log(e);
        setCurrentTab(e)
    }

    return (
        <>
            <div className={'flex flex-col min-h-svh '}>
            <EditorHeader handleTabChange={handleTabChange} defaultTab={defaultTab}/>
            <EditorTabs currentTab={currentTab} />
            </div>
        </>
    )
}