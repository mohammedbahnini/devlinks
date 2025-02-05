'use server';
import prisma from "@/lib/db";


export const GetPlatforms = async () => {

    const platforms = await prisma.platform.findMany();

    return platforms;
}