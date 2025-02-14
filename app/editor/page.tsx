'use server';

import EditorPageProvider from "@/components/shared/editor/editor-page-provider";

import {GetAllPlatforms, GetUserPlatforms} from "../actions/platforms-actions";
import { headers } from "next/headers";
import { auth } from "@/auth";
import {GetUSerInfos} from "@/app/actions/user-actions";

export default async function Page() {

    // get all the platforms for select
    const platformsFromDB = await GetAllPlatforms();

    // get user's platforms and other infos
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const userInfos = (await GetUSerInfos(session?.user.id))[0];
    const userPlatforms = (await GetUserPlatforms(session?.user.id));
    const platformsTags = userPlatforms.map( p => p.tag);


    //const platforms = [BasePlatforms[0], BasePlatforms[1], BasePlatforms[2]];

    const userData = {
        platformsValues: [...platformsTags],
        mockupPlatforms: [...userPlatforms],
        avatarPath: 'https://xsgames.co/randomusers/avatar.php?g=male',
        firstName: userInfos.firstName  ,
        lastName: userInfos.lastName,
        email:  userInfos.email ,
    }


    return (
        <EditorPageProvider userData={userData} PlatformsSelectInitial={platformsFromDB} />
    )

}