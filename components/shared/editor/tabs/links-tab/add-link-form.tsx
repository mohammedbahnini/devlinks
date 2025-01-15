'use client';
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {AddLinkFormDataType, AddLinkSchema} from "@/lib/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import {Input} from "@/components/ui/input";
import {HiMenuAlt4} from "react-icons/hi";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {TbBrandGithubFilled} from "react-icons/tb";
import {AiFillYoutube} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";
import {Link} from "lucide-react";
import {PlatformType} from "@/components/shared/editor/tabs/links-tab/links-tab";

type AddLinkFormProps = {
    handleRemovePlatform : (index) => void;
    platform : PlatformType
}
export default function AddLinkForm(props : AddLinkFormProps){

    const { handleRemovePlatform , platform } = props;

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
                <form className={'flex flex-col gap-y-3'}>

                    <FormField
                        control={form.control}
                        name='link'
                        render={ ({field , fieldState})=> (
                            <FormItem>
                                <FormLabel className={'text-grey'}>Platform</FormLabel>
                                <Select  {...field} >
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Select a platform" />
                                    </SelectTrigger>
                                    <SelectContent className="">
                                        <SelectItem value="item1" Icon={TbBrandGithubFilled}  >Item 1</SelectItem>
                                        <SelectItem value="item2" Icon={AiFillYoutube}  >Item 1</SelectItem>
                                        <SelectItem value="item3" Icon={FaLinkedin}  >Item 1</SelectItem>
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