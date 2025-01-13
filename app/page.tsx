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
import { LuGithub } from "react-icons/lu";
import { FaGithubAlt } from "react-icons/fa";

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

  return (
    <>
      <Button variant={'default'} className="">Button</Button>
      <Button variant={'outline'} className="" >Button</Button>
      <br />
      <div className="px-10 py-10">
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

      <div className="px-10 py-10">
        <Select open={true} >
          <SelectTrigger className="">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent className="divide-y divide-blue-800 ">
            <SelectItem value="apple" Icon={LuGithub} MIcon={<FaGithubAlt />} >Apple</SelectItem>
            {/* <SelectItem value="banana" >Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem> */}
          </SelectContent>
        </Select>
      </div >

    </>

  );
}
