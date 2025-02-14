'use client'
import { CreateMainStore, MainStore } from '@/lib/store/store'
import { createContext } from 'react'
import { useRef } from 'react'
import EditorPage from './editor-page'
import { BasePlatformType, PlatformSelectType } from '@/lib/schemas'

type EditorPageProviderProps = {
    userData: {
        platformsValues?: string[] ,
        mockupPlatforms?: BasePlatformType[] ,
        avatarPath?: string | null ,
        firstName: string | null,
        lastName: string | null,
        email: string ,
    },
    PlatformsSelectInitial: PlatformSelectType[]

}


export const MainStoreContext = createContext<MainStore | null>(null)
export const StaticDataContext = createContext<PlatformSelectType[]>([])

export default function EditorPageProvider(props: EditorPageProviderProps) {

    const { userData, PlatformsSelectInitial } = props;
    const mainStore = useRef(CreateMainStore(userData)).current

    return (
        <StaticDataContext.Provider value={PlatformsSelectInitial} >
            <MainStoreContext.Provider value={mainStore}>
                <EditorPage />
            </MainStoreContext.Provider>
        </StaticDataContext.Provider>
    )
}