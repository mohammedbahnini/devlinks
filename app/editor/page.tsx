'use server';

import EditorPageProvider from "@/components/shared/editor/editor-page-provider";
import { BasePlatforms } from "@/lib/platforms";
import {GetAllPlatforms, GetUserPlatforms} from "../actions/get-platforms";
import { headers } from "next/headers";
import { auth } from "@/auth";
import {GetUSerInfos} from "@/app/actions/user-actions";

export default async function Page() {

    // get all the platforms for select
    const platformsFromDB = await GetAllPlatforms();

    // get user's platforms
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const userInfos = (await GetUSerInfos(session?.user.id))[0];
    const platformsTags = userInfos.Platforms.map( item => item.tag);


    //const platforms = [BasePlatforms[0], BasePlatforms[1], BasePlatforms[2]];

    const userData = {
        platformsValues: [...platformsTags],
        mockupPlatforms: [...userInfos.Platforms],
        avatarPath: 'https://xsgames.co/randomusers/avatar.php?g=male',
        firstName: userInfos.firstName,
        lastName: userInfos.lastName,
        email:  userInfos.email ,
    }


    return (
        <EditorPageProvider userData={userData} PlatformsSelectInitial={platformsFromDB} />
    )

}