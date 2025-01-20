'use client';
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {AddLinkFormDataType, AddLinkSchema, PlatformSelectType} from "@/lib/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import {Input} from "@/components/ui/input";
import {HiMenuAlt4} from "react-icons/hi";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Link} from "lucide-react";
import { PlatformsSelectInitial} from "@/lib/platforms";

type AddLinkFormProps = {
    handleRemovePlatform : (index) => void;
    handleChangePlatform : (value : string) => void;
    platform : PlatformSelectType;
}
export default function AddLinkForm(props : AddLinkFormProps){

    const { handleRemovePlatform ,handleChangePlatform, platform } = props;

    const form = useForm<AddLinkFormDataType>({
        resolver : zodResolver(AddLinkSchema),
    })



    return (
        <div className={'bg-light-grey p-5 rounded-xl flex flex-col gap-y-3 '}>

            <div className={'flex  justify-between items-center'}>
                <div>
                    <h1 className={'flex gap-x-2 items-center text-grey text-base font-bold'}><HiMenuAlt4 />Link #{platform.index}</h1>
                </div>
                <button className={'text-grey'} onClick={(e) => handleRemovePlatform(platform.index)}>Remove</button>
            </div>

            <Form {...form}>
                <form className={'flex flex-col gap-y-3'} onSubmit={form.handleSubmit(()=>{})}>

                    <FormField
                        control={form.control}
                        name='platform'
                        render={ ({field , fieldState})=> (
                            <FormItem>
                                <FormLabel className={'text-grey'}>Platform</FormLabel>
                                <Select  {...field} onValueChange={(value)=>handleChangePlatform(value)} >
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Select a platform" />
                                    </SelectTrigger>
                                    <SelectContent className="">
                                        {
                                            PlatformsSelectInitial.map( item => (
                                                <SelectItem value={item.value} Icon={item.icon} key={item.id}  >{item.name}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>

                                </Select>
                            </FormItem>
                        )}
                    />


                    <FormField
                    control={form.control}
                    name='link'
                    render={ ({field , fieldState})=> (
                        <FormItem>
                            <FormLabel className={'text-grey'}>Link</FormLabel>
                            <FormControl>
                                <Input
                                    type={'text'}
                                    placeholder={'e.g. https://www.github.com/johnappleseed'}
                                    {...field}
                                    error={fieldState.error?.message}
                                    icon={<Link size={16} />}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                    />
                </form>
            </Form>
        </div>
    )
}