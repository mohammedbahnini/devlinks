'use client';

import EditorTabs from "@/components/shared/editor/editor-tabs";
import EditorHeader from "@/components/shared/editor/header/editor-header";
import PreviewContent from "@/components/shared/editor/preview-content";
import { useContext } from "react";
import { MainStoreContext } from "./editor-page-provider";
import { useStore } from "zustand";

type Props = {
    children?: React.ReactNode
}

export default function EditorPage(props: Props) {

    // get data from context not the zustand store anymore

    const store = useContext(MainStoreContext);

    if (store) {
        const mode = useStore(store, s => s.mode);
        return (
            <>
                <div className={'flex flex-col min-h-svh '}>
                    <EditorHeader />
                    {mode === 'editor' && <EditorTabs />}
                    {mode === 'preview' && <PreviewContent />}
                </div>
            </>
        )
    }

    return (
        <p>An error while getting data from the store</p>
    )


}