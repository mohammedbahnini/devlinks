'use server';
import prisma from "@/lib/db";
import {BasePlatforms} from "@/lib/platforms";


export const AddPlatformToDB = async () => {

    const result = await prisma.platform.createMany({
        data: [
            ...BasePlatforms
        ]
    });


    console.log(result);
}

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

    const userPlatforms = await prisma.userPlatforms.findMany({
        select : {
            link : true ,
            platform : true
        } ,
        where : {
            userId : userId
        }
    })

    return userPlatforms.map( p => ({ link : p.link , ...p.platform}) );
}