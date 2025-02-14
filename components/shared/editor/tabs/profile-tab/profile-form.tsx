import ImageUploader from "@/components/shared/image-uploader";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Store } from "@/lib/store/store";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { MainStoreContext } from "../../editor-page-provider";
import { useStore } from "zustand";




export default function ProfileForm() {

    const form = useForm();
    const store = useContext(MainStoreContext);


    if (store) {

        const { firstName, lastName, email, setFirstName, setLastName, setEmail } = useStore(store, s => s);



        return (
            <div>
                <Form {...form}>
                    <form>

                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <div className="bg-light-grey p-5 rounded-xl">
                                    <FormItem className="flex flex-col gap-y-4 md:flex-row md:items-center gap-x-4">
                                        <div className=" md:w-60 lg:w-28 xl:w-60 shrink-0 ">
                                            <FormLabel className="body-m text-grey ">Profile picture</FormLabel>
                                        </div>

                                        <FormControl>
                                            <div className="flex flex-col gap-y-6  md:flex-row md:items-center md:gap-x-6 ">
                                                <ImageUploader />
                                                <span className="body-s text-grey ">Image must be below 1024x1024px. Use PNG or JPG format .</span>
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                </div>
                            )}
                        />

                        <div className="bg-light-grey p-5 rounded-xl mt-6 flex flex-col gap-y-3">

                            <FormField
                                control={form.control}
                                name='first-name'
                                render={() => (
                                    <FormItem className="md:flex md:items-center md:gap-x-4  ">
                                        <div className="md:w-60 lg:w-28 xl:w-60 ">
                                            <FormLabel className="body-s text-grey mb-1 ">First name*</FormLabel>
                                        </div>

                                        <FormControl>
                                            <Input type="text" placeholder="Ben" className="md:flex-1" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='last-name'
                                render={() => (
                                    <FormItem className="md:flex md:items-center md:gap-x-4  ">
                                        <div className="md:w-60 lg:w-28 xl:w-60 ">
                                            <FormLabel className="body-s text-grey mb-1">Last name*</FormLabel>
                                        </div>
                                        <FormControl>
                                            <Input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Wright" className="md:flex-1" />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='email'
                                render={() => (
                                    <FormItem className="md:flex md:items-center md:gap-x-4  ">
                                        <div className="md:w-60 lg:w-28 xl:w-60 ">
                                            <FormLabel className="body-s text-grey mb-1">Email</FormLabel>
                                        </div>
                                        <FormControl>
                                            <Input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="ben@example.com" className="md:flex-1" />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                        </div>
                    </form>
                </Form>
            </div>
        )


    }

    return null
}