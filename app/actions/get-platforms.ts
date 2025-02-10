'use server';
import prisma from "@/lib/db";


export const GetAllPlatforms = async () => {

    const platforms = await prisma.platform.findMany({
        select: {
            id: true,
            name: true,
            tag: true,
            icon: true
        }
    });

    return platforms;
}


export const GetUserPlatforms = async (userId: string ) => {

    const userPlatforms = await prisma.user.findMany({
        include : {
            Platforms : true
        } ,
        where : {
            id : userId
        }
    });

    return userPlatforms;
}