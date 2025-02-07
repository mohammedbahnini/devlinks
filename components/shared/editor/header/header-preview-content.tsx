import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { MainStoreContext } from "../editor-page-provider";
import { useStore } from "zustand";

export default function HeaderPreviewContent() {

    const store = useContext(MainStoreContext);
    if (store) {
        const changeMode = useStore(store, s => s.changeMode);

        return (
            <>
                <Button variant={'outline'} className="flex-1 min-w-fit max-w-40 " onClick={() => changeMode('editor')}>Back to Editor</Button>
                <Button className="flex-1 min-w-fit max-w-40">Share Link</Button>
            </>
        )
    }

    return null

}