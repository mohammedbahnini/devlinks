'use client';
import React, { ChangeEvent, useContext, useRef, useState } from 'react';
import { PiImage } from 'react-icons/pi';
import { CgSpinnerTwo } from "react-icons/cg";
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { Store } from '@/lib/store/store';
import { MainStoreContext } from './editor/editor-page-provider';
import { useStore } from 'zustand';

interface Props {
    children?: React.ReactNode;
}

function ImageUploader(props: Props) {


    const [file, setFile] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);


    const store = useContext(MainStoreContext);
    if (store) {

        const { avatarPath, setAvatarPath } = useStore(store, s => s);

        async function handleChange(e: ChangeEvent<HTMLInputElement>) {

            setIsUploading(true);
            // add image to the server 

            await new Promise(resolve => setTimeout(resolve, 500));

            setIsUploading(false);

            console.log(e.target.files);
            if (e.target.files?.length) {
                setFile(URL.createObjectURL(e.target.files[0]));
                setAvatarPath(URL.createObjectURL(e.target.files[0]));
            }

        }


        const handleUploadClick = () => {
            fileRef.current?.click();
        }



        return (



            <div className="w-[193px] aspect-square rounded-xl relative overflow-hidden shrink-0">
                <div className='hidden invisible'>
                    <input type="file" hidden ref={fileRef} onChange={handleChange} accept='image/*' />
                </div>
                {isUploading && (
                    <div className="absolute bg-light-purple w-full h-full left-0 top-0 flex items-center justify-center" onClick={handleUploadClick}>
                        <div className="flex flex-col items-center gap-y-2 ">
                            <div className='animate-spin text-5xl text-purple'>
                                <CgSpinnerTwo />
                            </div>
                        </div>
                    </div>
                )}
                {
                    !isUploading && !avatarPath &&
                    (

                        <div className="absolute bg-light-purple w-full h-full left-0 top-0 flex items-center justify-center" onClick={handleUploadClick}>
                            <div className="flex flex-col items-center gap-y-2 cursor-pointer">
                                <PiImage className="text-3xl text-purple " />
                                <p className="heading-s text-purple">+ Upload Image</p>
                            </div>
                        </div>
                    )
                }
                {
                    !isUploading && avatarPath &&
                    (
                        <div className="w-[193px] aspect-square rounded-xl relative overflow-hidden">
                            <div className="absolute bg-light-purple w-full h-full left-0 top-0 flex items-center justify-center">
                                <div className="absolute w-full h-full left-0 top-0 ">
                                    <div className="absolute bg-black/50 w-full h-full"></div>
                                    <img src={avatarPath} alt="Avatar" className="object-cover h-full w-full" />
                                </div>
                                <div className="flex flex-col items-center gap-y-2 text-white z-10 cursor-pointer" onClick={handleUploadClick}>
                                    <PiImage className="text-3xl  " />
                                    <p className="heading-s ">Change Impage</p>
                                </div>
                            </div>
                        </div>
                    )

                }

            </div>
        )
    }

    return null
}

export default ImageUploader
