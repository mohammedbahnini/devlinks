import { Button } from "@/components/ui/button";
import { Store } from "@/lib/store/store"

export default function HeaderPreviewContent() {
    const changeMode = Store(state => state.changeMode);

    return (
        <>
            <Button variant={'outline'} className="flex-1 min-w-fit max-w-40 " onClick={() => changeMode('editor')}>Back to Editor</Button>
            <Button className="flex-1 min-w-fit max-w-40">Share Link</Button>
        </>
    )
}