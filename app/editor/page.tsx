'use server';

import EditorPageProvider from "@/components/shared/editor/editor-page-provider";
import { BasePlatforms } from "@/lib/platforms";
import { GetAllPlatforms } from "../actions/get-platforms";


export default async function Page() {

    // init the with data from database (user inofos , ...)
    const platformsFromDB = await GetAllPlatforms();

    const platforms = [BasePlatforms[0], BasePlatforms[1], BasePlatforms[2]];

    const userData = {
        platformsValues: [platforms[0].tag, platforms[1].tag, platforms[2].tag],
        mockupPlatforms: [...platforms],
        avatarPath: 'https://xsgames.co/randomusers/avatar.php?g=male',
        firstName: 'Ben',
        lastName: 'Wright',
        email: 'ben@example.com',
    }


    return (
        <EditorPageProvider userData={userData} PlatformsSelectInitial={platformsFromDB} />
    )

}