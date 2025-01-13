'use client';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, AtSignIcon, Link } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { avocado } from '@lucide/lab';
import { LuGithub, LuLink } from "react-icons/lu";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillYoutube } from "react-icons/ai";
import { FaGithubAlt, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const formshcema = z.object({
  email: z.string().min(1, 'Enter an email').email('Email invalid')
})

type formtype = z.infer<typeof formshcema>;

export default function Home() {

  const form = useForm<formtype>({
    resolver: zodResolver(formshcema),
    defaultValues: {
      email: 'jhonedooe@example.com'
    }
  });

  const onSubmit = (formdata: formtype) => {

  }


  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
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

      <div className="px-20 py-5">

        <h1>Image</h1>




        <div className="App">
          <h2>Add Image:</h2>
          <input type="file" onChange={handleChange} />
          <img src={file} />
        </div>


      </div>

    </>

  );
}
