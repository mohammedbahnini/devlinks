'use server';
import prisma from "@/lib/db";
import { BasePlatforms } from "@/lib/platforms";


export const AddPlatformToDB = async () => {

    const result = await prisma.platform.createMany({
        data: [
            ...BasePlatforms
        ]
    });


    console.log(result);
}