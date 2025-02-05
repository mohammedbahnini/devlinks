'use server';

import EditorPage from "@/components/shared/editor/editor-page";
import { GetPlatforms } from "../actions/get-platforms";
import Initializer from "@/components/shared/editor/initializer";
import EditorPageProvider from "@/components/shared/editor/editor-page-provider";


// import EditorTabs from "@/components/shared/editor/editor-tabs";
// import EditorHeader from "@/components/shared/editor/header/editor-header";
// import PreviewContent from "@/components/shared/editor/preview-content";
// import { Store } from "@/lib/store/store";

export default async function Page() {
    const platforms = await GetPlatforms();
    // const currentTab = Store(state => state.currentTab);
    // const setCurrentTab = Store(state => state.changeTab);
    // const mode = Store(state => state.mode);


    // const handleTabChange = (e: string) => {
    //     setCurrentTab(e)
    // }

    // return (
    //     <>
    //         <div className={'flex flex-col min-h-svh '}>
    //             <EditorHeader handleTabChange={handleTabChange} defaultTab={currentTab} mode={mode} />
    //             {mode === 'editor' && <EditorTabs currentTab={currentTab} />}
    //             {mode === 'preview' && <PreviewContent />}
    //         </div>
    //     </>
    // )


    return (
        // <Initializer data={platforms}>
        //     <EditorPage />
        // </Initializer>


        <EditorPageProvider data={platforms}>

        </EditorPageProvider>
    )

}