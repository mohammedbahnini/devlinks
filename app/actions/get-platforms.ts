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


export const GetUserPlatforms = async () => {

    const userPlatforms = await prisma.platform.findMany({
        orderBy: {
            id: 'asc'
        },
        take: 5
    });

    return userPlatforms;
}