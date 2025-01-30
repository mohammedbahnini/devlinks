'use client';

import EditorTabs from "@/components/shared/editor/editor-tabs";
import EditorHeader from "@/components/shared/editor/header/editor-header";
import PreviewContent from "@/components/shared/editor/preview-content";
import { Store } from "@/lib/store/store";
import { useEffect, useState } from "react";

export default function EditorPage() {

    const currentTab = Store(state => state.currentTab);
    const setCurrentTab = Store(state => state.changeTab);
    const mode = Store(state => state.mode);

    // load user data
    // useEffect(() => {
    //     Store.getState().getUserData();
    // }, []);

    const handleTabChange = (e: string) => {
        setCurrentTab(e)
    }

    return (
        <>
            <div className={'flex flex-col min-h-svh '}>
                <EditorHeader handleTabChange={handleTabChange} defaultTab={currentTab} mode={mode} />
                {mode === 'editor' && <EditorTabs currentTab={currentTab} />}
                {mode === 'preview' && <PreviewContent />}
            </div>
        </>
    )
}