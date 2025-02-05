'use client'
import { createFakeStore, FakeStore } from '@/lib/store/store'
import { createContext } from 'react'
import { useRef } from 'react'
import FakeConsumerComponent from './fake-consumer-component'
import EditorPage from './editor-page'


export const FakeStoreContext = createContext<FakeStore | null>(null)

export default function EditorPageProvider({ data }) {
    const fakeStore = useRef(createFakeStore(data)).current
    return (
        <FakeStoreContext.Provider value={fakeStore}>
            <FakeConsumerComponent />
            <EditorPage />
        </FakeStoreContext.Provider>
    )
}