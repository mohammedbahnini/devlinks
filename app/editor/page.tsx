'use client';
import EditorHeader from "@/components/shared/editor/editor-header";
import EditorTabs from "@/components/shared/editor/editor-tabs";
import { Store } from "@/lib/store/store";
import { useState } from "react";

export default function EditorPage() {
    const currentTab = Store(state => state.currentTab);
    const setCurrentTab = Store(state => state.changeTab);


    const handleTabChange = (e: string) => {
        setCurrentTab(e)
    }

    return (
        <>
            <div className={'flex flex-col min-h-svh '}>
                <EditorHeader handleTabChange={handleTabChange} defaultTab={currentTab} />
                <EditorTabs currentTab={currentTab} />
            </div>
        </>
    )
}