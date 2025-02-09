import Container from "@/components/shared/container";
import ProfileForm from "./profile-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PhoneMockup from "../phone-mockup";
import { AddPlatformToDB } from "@/app/actions/add-platfoms";


export default function ProfileTab() {



    return (
        <Container className={'my-4 md:my-6 flex-1 flex md:gap-x-6'}>

            <div className={'hidden invisible lg:flex lg:visible bg-white rounded-xl md:w-5/12 p-6 items-center justify-center '}>
                <PhoneMockup />
            </div>

            <div className={'h-full flex-1 flex flex-col bg-white rounded-xl p-6 md:p-10'}>
                {/* <Button onClick={e => AddPlatformToDB()} type="submit">Add Platform</Button> */}
                <div className={'flex flex-col gap-2'}>
                    <h1 className={'heading text-dark-grey '}>Profile details</h1>
                    <p className={'body-m text-grey '}>Add you details to create a personnal touch to your profile</p>
                </div>

                <div className="mt-10 flex-1">
                    <ProfileForm />
                </div>


                <div className={'-mx-2 border-t border-t-border-color pt-0 mt-6 md:flex md:justify-end md:mx-0 '}>
                    <Button className={cn('w-full md:w-fit md:min-w-fit mt-6  ')} >Save</Button>
                </div>
            </div>
        </Container >
    )
}