import {Button} from "@/components/ui/button";
import AddLinkForm from "@/components/shared/editor/tabs/add-link-form";

export default function LinksTab() {
    return (
        <div>
            <div className={'flex flex-col gap-2'}>
                <h1 className={'heading text-dark-grey '}>Customize your links</h1>
                <p className={'body-m text-grey '}>Add/edit/remove links below and then share all your profiles with the
                    world!</p>
            </div>

            <div className={'mt-10'}>
                <Button variant={'outline'} className={'w-full'}>+ Add new link</Button>

                <div className={'mt-6'}>
                    <AddLinkForm />
                </div>

            </div>
        </div>
    )
}