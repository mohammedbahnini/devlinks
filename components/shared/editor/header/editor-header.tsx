'use client';
import Container from "@/components/shared/container";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LuLink } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { TbEye } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import HeaderEditorContent from "./header-editor-content";
import HeaderPreviewContent from "./header-preview-content";
import { useContext } from "react";
import { MainStoreContext } from "../editor-page-provider";
import { useStore } from "zustand";



export default function EditorHeader() {


    const store = useContext(MainStoreContext);

    if (store) {

        const mode = useStore(store, s => s.mode);
        return (
            <header className="md:p-6 md:pb-0 ">

                <Container className='bg-white py-4 px-6 flex justify-between items-center rounded-b-xl md:rounded-xl gap-x-4'>
                    {mode === 'editor' && <HeaderEditorContent />}
                    {mode === 'preview' && <HeaderPreviewContent />}
                </Container>

            </header>


        )
    }

    return null;

}