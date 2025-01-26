import Container from "@/components/shared/container";
import TabContent from "@/components/shared/editor/tab-content";
import LinksTab from "@/components/shared/editor/tabs/links-tab/links-tab";
import ProfileTab from "@/components/shared/editor/tabs/profile-tab/profile-tab";

type EditorTabs = {
    currentTab: string
}

export default function EditorTabs(props: EditorTabs) {
    const { currentTab } = props;
    return (
        <section className={'flex-1 flex flex-row'}>

            <section className={'flex flex-1'}>
                <TabContent currenTab={currentTab} value={'links'} content={<LinksTab />} />
                <TabContent currenTab={currentTab} value={'profile'} content={<ProfileTab />} />
            </section>

        </section>
    )
}