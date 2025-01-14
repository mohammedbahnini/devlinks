'use client';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {AtSignIcon, Link} from "lucide-react";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {TbBrandGithubFilled} from "react-icons/tb";
import {AiFillYoutube} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {LuLink} from "react-icons/lu";
import ImageUploader from "@/components/shared/image-uploader";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ChangeEvent, useRef, useState} from "react";
import {z} from "zod";

const formshcema = z.object({
    email: z.string().min(1, 'Enter an email').email('Email invalid')
})

type formtype = z.infer<typeof formshcema>;


export default function SystemDesignPage() {

    const form = useForm<formtype>({
        resolver: zodResolver(formshcema),
        defaultValues: {
            email: 'jhonedooe@example.com'
        }
    });

    const onSubmit = (formdata: formtype) => {

    }


    const [file, setFile] = useState('avatar.PNG');

    const fileRef = useRef<HTMLInputElement>(null);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.files);
        if (e.target.files?.length) {
            setFile(URL.createObjectURL(e.target.files[0]));
        }

    }


    const handleUploadClick = () => {
        fileRef.current?.click();
    }


    return (
        <>
            <Button variant={'default'} className="">Button</Button>
            <Button variant={'outline'} className="" >Button</Button>
            <br />
            <div className="px-10 py-5">
                <Input
                    type="text"
                    placeholder="Text Field Empty"
                    icon={<Link size={16} className="text-grey" strokeWidth={2} />}
                    error="Please check agin" />
            </div>
            <br />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => { })} >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="text" placeholder="Enter an email" {...field} error={fieldState.error?.message} icon={<AtSignIcon size={16} />} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </Form >
            <br />

            <div className="px-10 py-5">
                <Select  >
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent className="">
                        <SelectItem value="item1" Icon={TbBrandGithubFilled}  >Item 1</SelectItem>
                        <SelectItem value="item2" Icon={AiFillYoutube}  >Item 1</SelectItem>
                        <SelectItem value="item3" Icon={FaLinkedin}  >Item 1</SelectItem>
                    </SelectContent>
                </Select>
            </div >


            <br />

            <div className="px-20 py-5">

                <h1>Tabs</h1>


                <Tabs defaultValue="account" className="">
                    <TabsList>
                        <TabsTrigger value="account" icon={LuLink}>Account</TabsTrigger>
                        <TabsTrigger value="password" icon={LuLink} >Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">Make changes to your account here.</TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>


            </div>

            <br />

            <div className="px-10 py-5">

                <h1>Image</h1>


                <ImageUploader />





            </div>

        </>
    )
}